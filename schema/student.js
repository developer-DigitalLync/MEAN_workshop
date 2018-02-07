var mongoose = require('mongoose');

var studentschema = mongoose.Schema({

            collegeName: {
                type: String
               
            },

            yearOfPassing: {  
                type: String
                
            },

            technology: {  
                type: String
               
            }
});

module.exports = mongoose.model('student',studentschema);