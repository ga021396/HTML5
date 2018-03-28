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

    pool.query('select * from employee', function(err, results) {
        if (err)throw err;

        if(results.length==0){
            res.render('dataNotFound', {});
        }else{
		    //-----------------
			// 增加傳出moment
			//-----------------
            res.render('employeeList', {data:results, moment:moment});  
        }  
    }); 
});

module.exports = router;