var express = require('express');
var router = express.Router();
var mysql = require('mysql');
//----------------
// 引用db.js
//----------------
var pool = require('./lib/db.js');


/* GET home page. */
router.get('/', function(req, res, next) {

    pool.query('select * from customer', function(err, results) {
        if (err)throw err;

        if(results.length==0){
            res.render('dataNotFound', {});
        }else{
            res.render('customerList', {data:results});
        }  
    }); 
});

module.exports = router;