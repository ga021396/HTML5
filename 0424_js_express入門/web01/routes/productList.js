var express = require('express');
var router = express.Router();
var mysql = require('mysql');
//----------------
// 引用db.js
//----------------
var pool = require('./lib/db.js');


/* GET home page. */
router.get('/', function(req, res, next) {

    pool.query('SELECT a.proNo, a.proName, a.supNo, b.supName from product a, supplier b where  a.supNo=b.supNo', function(err, results) {
        if (err)throw err;

        if(results.length==0){
            res.render('dataNotFound', {});
        }else{
            res.render('productList', {data:results});
        }  
    }); 
});

module.exports = router;