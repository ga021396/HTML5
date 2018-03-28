var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//----------------------
// 引用db.js
//----------------------
var pool = require('./lib/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    var cusData;
    var empData;

    //------------------	
	// 先取出供應商資料
	//------------------
    pool.query('select * from customer', function(err, results) {       
        if (err) {
            cusData=[];
        }else{
            cusData=results;
        }
       
        //---------------------	   
		// 再取出產品型態資料
		//---------------------
        pool.query('select * from employee', function(err, results) {
            if (err) {
                empData=[];
            }else{
                empData=results;
            }

            //------------------------------------------   
            // 將供應商及產品型態資料一起送給輸入表單
            //------------------------------------------
            res.render('ordMasterAddForm', {cusData:cusData, empData:empData});
       }); 
    }); 
});

module.exports = router;