var mongoose = require('mongoose');

var employeschema = mongoose.Schema({

            companyName: {
                type: String,  
            },
            designation: {  
                type: String,               
            },

            email: {  
                type: String
              
            },
            
            technology: {  
                type: String,
                
            }
})

module.exports = mongoose.model('employ',employeschema);