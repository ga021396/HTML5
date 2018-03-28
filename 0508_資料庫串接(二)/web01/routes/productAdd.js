var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//------------------
// 載入資料庫連結
//------------------
var pool = require('./lib/db.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    //取得使用者傳來的參數
    var proNo=req.param("proNo");
    var proName=req.param("proName");
    var supNo=req.param("supNo");
    var typNo=req.param("typNo");
    var price=req.param("price");
    var stockAmt=req.param("stockAmt");
    var orderAmt=req.param("orderAmt");
    var safeAmt=req.param("safeAmt");
    var inventoryDate=req.param("inventoryDate");
	
    //建立一個新資料物件
    var newData={
        proNo:proNo,
        proName:proName,
        supNo:supNo,
        typNo:typNo,
        price:price,
        stockAmt:stockAmt,
        orderAmt:orderAmt,
        safeAmt:safeAmt,
        inventoryDate:inventoryDate
    }	
	
    pool.query('INSERT INTO product SET ?', newData, function(err, rows, fields) {
        if (err){
            res.render('addFail', {});     //新增失敗
        }else{
            res.render('addSuccess', {});  //新增成功
        }
    });
});

module.exports = router;