import mongoose from "mongoose";
const { Schema } = mongoose;

const expenseSchema = new Schema({
    
    total:{
        type:Number,
        required:[true, "total is required"],
        min:[0, "Total can't be less than 0"]
    },

    splits: 
    [
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
        
        
    ,
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
    description: 
    {
        type: String,
        required: [true, "There has to be a description"]
    },
    participants:
    [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
    },
    createdAt:
    {
        type: String
    }

    
});


const Expense = mongoose.model('Expense', expenseSchema);

export default Expense;