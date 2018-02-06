import { Mongoose } from "mongoose";

var employee = Mongoose.Schema({

            companyName: {
                type: string,
                required: true
            },

            designation: {  
                type: string,
                required: true
            },

            technology: {  
                type: string,
                required: true
            }
})

export { Employee }