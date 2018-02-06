import { Mongoose } from "mongoose";

var students = Mongoose.Schema({

            collegeName: {
                type: string,
                required: true
            },

            yearOfPassing: {  
                type: string,
                required: true
            },

            technology: {  
                type: string,
                required: true
            }
})

export { Students }