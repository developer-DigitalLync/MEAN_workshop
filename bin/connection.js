
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://127.0.0.1:27017/test';
module.exports.init = function(){
    MongoClient.connect(url, function(err, db){
        if(!err){
            console.log('mongodb connected');
        }
        else{
            console.log(err);
        }
        module.exports.db = db;
    });
};