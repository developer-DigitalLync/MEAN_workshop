var mongoose = require('mongoose');

var userschema = mongoose.Schema({

            firstName: {
                type: String
               
            },

            lastName: {  
                type: String
                
            },

            email: {  
                type: String
              
            },

            mobile: {  
                type: Number
               
            },

            password: {
                type: String
            },

            workingstatus: {  
                type: String
               
            },

            technology: {  
                type: String
                
            }
});

module.exports = mongoose.model('users',userschema);

