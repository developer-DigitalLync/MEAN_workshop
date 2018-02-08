var express = require('express');
var router = express.Router();
var encrypt = require('sha256');
var async = require('async--await');
var url = 'mongodb://127.0.0.1:27017/demo';
var mongoose = require('mongoose');
var studentschema = require('../schema/student');
var employschema = require('../schema/employee')


/* GET home page. */
router.post('/education', function(req, res) {
  mongoose.connect(url, function(err, db){
    if (err){
     throw err;
    }
    else{
      
      var data = req.body.data;
      var studentUpd = new studentschema(data);
      studentUpd.save(function(err,resp){
        if(err){
          console.log(err);
        }
        else{
          console.log("success");
          
        }
      })
  }
});

  res.send("success")
});




router.post('/employ', function(req, res) {
  mongoose.connect(url, function(err, db){
    if (err){
     throw err;
    }
    else{
      
      var data = req.body.data;
      var employUpd = new employschema(data);
      employUpd.save(function(err,resp){
        if(err){
          console.log(err);
        }
        else{
          console.log("success");
          
        }
      })
  }
});

  res.send("success")
});


 router.post('/password', function(req, res) {
  mongoose.connect(url,  function(err, db){
    if (err){
     throw err;
    }
    else{
      
       var data = req.body.data;
       var pwd = data.password;
       var enc;
        enc  = encrypt(pwd);
      var myquery = { email: data.email };
      var newvalues = { $set: {password :enc} };
      db.collection("users").updateOne(myquery,newvalues,function(err,resp){
        if(err){
          console.log(err);
        }
        else{
          console.log("success");  
        }
      })
  }
});

  res.send("success")
});

 



module.exports = router;
