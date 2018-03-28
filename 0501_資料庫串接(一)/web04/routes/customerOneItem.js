var express = require('express');
var router = express.Router();
var mysql = require('mysql');
//----------------
// 引用db.js
//----------------
var pool = require('./lib/db.js');


//----------------------
// 引用外掛
//----------------------
var moment = require('moment');


/* GET home page. */
router.get('/', function(req, res, next) {
	//------------------------
	// 取得使用者輸入的參數
	//------------------------
	var cusNo=req.query.cusNo.trim();
	
	
	//------------------------
	// 讀取資料庫內容
	//------------------------	
    pool.query('select * from customer where cusNo=?', [cusNo], function(err, results) {
        if (err)throw err;

        if(results.length==0){
            res.render('dataNotFound', {});
        }else{
            res.render('customerOneItem', {data:results, moment:moment});  
        }  
    }); 
});

module.exports = router;