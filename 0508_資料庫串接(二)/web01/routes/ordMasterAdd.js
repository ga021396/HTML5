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
    var omNo=req.param("omNo");
    var cusNo=req.param("cusNo");
    var empNo=req.param("empNo");
    var transFee=req.param("transFee");
    var ordDate=req.param("ordDate");

	
    //建立一個新資料物件
    var newData={
        omNo:omNo,
        cusNo:cusNo,
        empNo:empNo,
        transFee:transFee,
        ordDate:ordDate,
    
    }	
	
    pool.query('INSERT INTO ordmaster SET ?', newData, function(err, rows, fields) {
        if (err){
            res.render('addFail', {});     //新增失敗
        }else{
            res.render('addSuccess', {});  //新增成功
        }
    });
});

module.exports = router;