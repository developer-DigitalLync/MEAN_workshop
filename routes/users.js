
var express = require('express');
var router = express.Router();
var user = require('../schema/users');
var student = require('../schema/student');
var employee= require('../schema/employee');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'dummytest471@gmail.com',
         pass: 'dummytest3296'
     }
 });

/* Insert users listing. */
router.post('/register', function(req, res, next) {
 
      var data = req.body;
      console.log(data);
      // var userAdd = new user(data);
      employee.create({},(err, work)=>{
        data.work = work._id;
        student.create({},(err, edu)=>{
        data.education = edu._id;
        console.log(data)
          user.create(data,(err,res)=>{
            if(err){
              console.log(err);
            }
            else{
            var link="http://localhost:3000/password?Id="+data.email;
            const mailOptions = {
              from: 'development@digitallynctech.com', // sender address
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
        })
      })
      // student.create({},(err, info)=>{
      //   console.log(info)
      //   data.education = info._id;
      // })
      
res.send("Registration success");
});

router.get('/', (req, res)=>{
  res.send("Workshop Application")
})

router.get('/users', (req,res)=>{
    user.find({}).populate('work').populate('education').exec((err,data)=>{
      res.send(data);
    })
})

router.get('/details', (req, res)=>{
  user.findById(req.query.id).populate('work').populate('education').exec((err, data)=>{
    res.send(data);
  })
})

module.exports = router;
