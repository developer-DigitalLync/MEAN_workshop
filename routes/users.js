
var express = require('express');
var router = express.Router();
var url = 'mongodb://127.0.0.1:27017/demo';
var mongoose = require('mongoose');
var userReg = require('../schema/users');


/* Insert users listing. */
router.post('/Register', function(req, res, next) {
  mongoose.connect(url, function(err, db){
    if (err){
     throw err;
    }
    else{
      var data = req.body.data;
      var userAdd = new userReg(data);
      userAdd.save(function(err,res){
        if(err){
          console.log(err);
        }
        else{
          console.log("success");
        }
      })
  }
});
});

module.exports = router;
