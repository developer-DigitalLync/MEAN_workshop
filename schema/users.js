import { Mongoose } from "mongoose";

var users = Mongoose.Schema({

            firstName: {
                type: string,
                required: true
            },

            lastName: {  
                type: string,
                required: true
            },

            email: {  
                type: string,
                required: true
            },

            mobile: {  
                type: number,
                required: true
            },

            technology: {  
                type: string,
                required: true
            }
})

export { Users }

