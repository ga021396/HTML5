var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var fs = require('fs');


//------------------
// 載入資料庫連結
//------------------
var pool = require('./lib/db.js');

//--------------------------------
// 引用multer, easyimg外掛
//-------------------------------- 
var multer  = require('multer');
var easyimg = require('easyimage');

//---------------------------------
// 宣告上傳存放空間及檔名更改
//---------------------------------
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
	    //檔案存在<public>內的<images>中.
        cb(null, 'public\\images');
    },

    filename: function (req, file, cb) {
	    //將檔名前增加時間標記, 避免圖名重覆而被覆蓋.  
        cb(null, Date.now()+"--"+file.originalname);		
    }   
})


/* POST home page. */
router.post('/', function(req, res) {
	//-----------------------------------------------
	// 產生multer的上傳物件
	//-----------------------------------------------
	var maxSize=1*1024*1024;  //設定最大可接受圖片大小(1M)
	
	var upload = multer({
		storage:storage,
		limits:{ fileSize: maxSize }
	}).single('picture');  //表單中的檔案名稱

    // 上傳檔案
    upload(req, res, function (err) {
		//---------------------
	    // 如果失敗
		//---------------------		
        if (err) {
			var file = req.file;
			res.render('fileUploadFail',{});
            return
        }

		
		//---------------------
		// 如果成功
		//---------------------		
		var filename=null;
		
		if (typeof req.file != 'undefined'){
			//-------------------------------------------------------
			// 顯示成功上傳的圖片資訊
			//-------------------------------------------------------
			var file = req.file;
			console.log('文件類型：%s', file.mimetype);
			console.log('原始文件名：%s', file.originalname);
			console.log('文件大小：%s', file.size);
			console.log('文件保存路徑：%s', file.path);
		
			filename = file.path.replace(/^.*[\\\/]/, '')
			var path=file.path.substring(0, file.path.length-filename.length);
			console.log("僅路徑:", path);
			//-------------------------------------------------------

			
			
			//-------------------------------------------------------	
			// 用easyimg顯示圖片資訊
			//-------------------------------------------------------	
			easyimg.info(file.path).then(
				function(file) {
					console.log(file);
				}, function (err) {
					console.log(err);
				}
			);
			//-------------------------------------------------------

			

			//-------------------------------------------------------	
			// 用easyimg產生小方圖
			//-------------------------------------------------------	
			var thembnailName=path+"thumbnail-"+filename;
			
			easyimg.thumbnail({
				src:file.path, 
				dst:thembnailName,
				width:100, height:200,
				x:0, y:0
			}).then(
				function(image) {
					console.log('已產生小方圖: ' + image.width + ' x ' + image.height);
				},
				function (err) {
					console.log(err);
				}
			);			
			//-------------------------------------------------------


			//-------------------------------------------------------	
			// 用easyimg調整大小並裁剪圖片
			//-------------------------------------------------------	
			var cropedName=path+"croped-"+filename;
			
			easyimg.rescrop({
				src:file.path, 
				dst:cropedName,
				width:600, height:400,
				cropwidth:700, cropheight:450,
				x:0, y:0
			}).then(
				function(image) {
					console.log('已產生調整大小並裁剪後的圖片: ' + image.width + ' x ' + image.height);
				},
				function (err) {
					console.log(err);
				}
			);			
			//-------------------------------------------------------
		}
		

		// 上傳成功, 接著取得使用者傳來的參數
		var proNo=req.param("proNo");
		var proName=req.param("proName");
		var supNo=req.param("supNo");
		var typNo=req.param("typNo");
		var price=req.param("price");
		var stockAmt=req.param("stockAmt");
		var orderAmt=req.param("orderAmt");
		var safeAmt=req.param("safeAmt");
		var inventoryDate=req.param("inventoryDate");
		var picture='';
		
		// 設定資料表圖片的名稱 
		if (typeof req.file != 'undefined'){
			picture="croped-"+filename;      	
		}
		
		// 建立一個新資料物件
		var newData={
			proNo:proNo,
			proName:proName,
			supNo:supNo,
			typNo:typNo,
			price:price,
			stockAmt:stockAmt,
			orderAmt:orderAmt,
			safeAmt:safeAmt,
			inventoryDate:inventoryDate,
			picture:picture
		}   

		// 將前項物件寫入資料表
		pool.query('INSERT INTO product SET ?', newData, function(err, rows, fields) {
			if (err){
				//刪除先前已上傳的圖片
				var deleteFile=null;
				
				deleteFile='public/images/' + filename;
				fs.unlink(deleteFile, (err) => {
					if (err) console.log('圖片檔(原圖)未上傳');
					console.log('已刪除圖片檔(原圖)');
				});		
				
				deleteFile='public/images/' + "croped-" + filename;
				fs.unlink(deleteFile, (err) => {
					if (err) console.log('圖片檔(裁剪圖)未上傳');
					console.log('已刪除圖片檔(裁剪圖)');
				});	
				
				var deleteFile='public/images/' + "thumbnail-" + filename;
				fs.unlink(deleteFile, (err) => {
					if (err) console.log('圖片檔(小方圖)未上傳');
					console.log('已刪除圖片檔(小方圖)');
				});	
							
				res.render('addFail', {});     //導向新增失敗頁面
			}else{
				res.render('addSuccess', {});  //導向新增成功頁面
			}
		});
    })
});

module.exports = router;