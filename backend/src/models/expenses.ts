import mongoose from "mongoose";
const { Schema } = mongoose;

const expenseSchema = new Schema({
    
    total:{
        type:Number,
        require:[true, "total is required"],
        min:[0, "Total can't be less than 0"]
    },

    paidBy: 
    {
        type:[
        {
        user:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'User',

        },
        amount:
        {
            type:Number,
            default: 0,
            min: [0, "Amount can't be less than 0"]
     
        }
        }
        ]
        
        
    },
    category: {
            type: String,
            enum: [
                    'food',
                    'transport',
                    'housing',
                    'entertainment',
                    'travel',
                    'shopping',
                    'health',
                    'education',
                    'other'
                ],
                default: 'other'
         },
    Description: String,
    participants:
    [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]

    
})
