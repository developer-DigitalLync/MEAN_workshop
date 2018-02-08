var mongoose = require('mongoose');

var userschema = mongoose.Schema({

            firstname: {
                type: String
               
            },

            lastname: {  
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
            image: { type: String},
            workingstatus: {  
                type: String
               
            },
            technology: {  
                type: String
            },
            work  : { type: mongoose.Schema.Types.ObjectId, ref: 'work' },
            education  : { type: mongoose.Schema.Types.ObjectId, ref: 'education' }
});

module.exports = mongoose.model('users',userschema);

