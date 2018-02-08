var mongoose = require('mongoose');

var educationschema = mongoose.Schema({

            collegeName: {
                type: String
               
            },

            yearOfPassing: {  
                type: Number
                
            },

            stream: {  
                type: String
               
            }
});

module.exports = mongoose.model('education',educationschema);