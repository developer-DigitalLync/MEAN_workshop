
var express = require('express');
var router = express.Router();
var url = 'mongodb://127.0.0.1:27017/demo';
var mongoose = require('mongoose');
var userReg = require('../schema/users');
var studentschema = require('../schema/student');
var employschema = require('../schema/employee')
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'dummytest471@gmail.com',
         pass: 'dummytest3296'
     }
 });

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
         
      var link="http://localhost:3000/password?Id="+data.email;
      const mailOptions = {
        from: 'haricm213@email.com', // sender address
        to: data.email, // list of receivers
        subject: 'Please Set your password', // Subject line
        html: "<a href="+link+"><b>Thank you For Registering click here Link to Set Password</b></a>"
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });

    }
  })
  }
});
res.send("success");
});

module.exports = router;
