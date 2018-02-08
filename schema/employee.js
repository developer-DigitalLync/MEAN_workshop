var mongoose = require('mongoose');

var workschema = mongoose.Schema({

            companyName: {
                type: String,  
            },
            designation: {  
                type: String,               
            },
            technology: {  
                type: String,
                
            }
})

module.exports = mongoose.model('work',workschema);