var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	//-------------------------
	// 展開查詢畫面
	//-------------------------
	res.render('productOneItemQuery', {});  	
});

module.exports = router;