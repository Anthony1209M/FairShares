import mongoose from "mongoose";
const {Schema} = mongoose;
import validator from "validator";


const userSchema = new Schema({
    name:
    {
        type: String,
        minlength: [5, "Name must have at least 5 characters"]

    },
    lastName:
    {
        type: String,
        minlength: [5, "Last name must have at least 5 characters"]

    },
    email:
    {
        type: String,
        validate: [validator.isEmail, "Invalid email"],
        unique: true
        
    },
    isRegistered:
    {
        type:Boolean,
        default: false

    },
    password:
    {
        type:String,
        minlength: [8, "Password needs at least 8 characters"],
        required: function()
        {
            return this?.isRegistered;
        }
    },

    confirmPassword:
    {
        type:String,
        required: function()
        {
            return this?.isRegistered;
        },
        validate:
        {
            validator: function(val: string)
            {
                if(!this.isRegistered) return true;
                return this.password === val;
            },
            message: "Password do not match"
        }
    }

})