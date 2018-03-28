var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//------------------
// 載入資料庫連結
//------------------
var pool = require('./lib/db.js');

var startPage=1;
var linePerPage=15; 
var navSegments=10;

/* GET home page. */
router.get('/', function(req, res, next) {
    var proName=req.param('proName');
	
    if(proName=="" || proName==null){
        res.render('dataNotFound', {query:"[未輸入關鍵字, 客戶清單]"});
		return;
    }
	
	proName = "%" + proName + "%";
    var pageNo=1

    pool.query('select count(*) as cnt from product where proName like ?', [proName], function(err, results) {
        if (err)throw err;

        var totalLine=results[0].cnt;
        var totalPage=1;

        pool.query('select * from product where proName like ?',[proName], function(err, results) {
            if (err) {
                res.render('dataNotFound', {query:"[客戶清單]"});
            }

            if(results.length==0){
                res.render('dataNotFound', {query:"[客戶清單]"});
            }else{
                var recordNo=(pageNo-1)*linePerPage+1;
                res.render('productListByPage', {data:results, pageNo:pageNo, totalLine:totalLine, totalPage:totalPage, startPage:startPage, linePerPage:linePerPage, navSegments:navSegments});
            }
        }); 
    }); 
});

module.exports = router;