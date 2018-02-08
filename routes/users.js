
var express = require('express');
var router = express.Router();
var user = require('../schema/users');
var student = require('../schema/student');
var employee= require('../schema/employee');
var nodemailer = require('nodemailer');
let bcryptjs = require('bcryptjs');
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            requireTLS: true,
            auth: {
                user: 'elit.naveen@gmail.com',
                pass: 'kddintepfsnefnrw'
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
            var link="http://localhost:4200/#/auth/setpassword?id="+data.email;
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
  res.send("Registration success");
});

router.post('/password', (req, res)=>{
  let hash = bcryptjs.hashSync(req.body.password, 8);
  user.findOneAndUpdate({email:req.body.email}, {$set: { password: hash }}, {new:true},(err, data)=>{
    if(err) res.send("Error")
    res.send("Password set Successfully");
  })
})

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

router.post('/login', (req, res)=>{
  user.findOne({email:req.body.email}, (err, data)=>{
    let compare = bcryptjs.compareSync(req.body.password, data.password);
    if(err) res.send("Something went wrong while logging");
    if(!data){
      res.send('No User Found')
    }else if(!compare){
      res.send("Invalid Credentials")
    }else{
      delete data["password"];
      res.send(data);
    }
  })
})

module.exports = router;
