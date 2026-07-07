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
        minlength: [5, "Last name must have at least 5 characters"],
        required: function()
        {
            return this?.isRegistered;
        }


    },
    email:
    {
        type: String,
        validate: [validator.isEmail, "Invalid email"],
        unique: true,
        require: true
        
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

  

});

userSchema.virtual("id").get(function () {
  return this._id.toString();
});

userSchema.set("toJSON", {
  virtuals: true,

  transform: (_, ret: any) => {
    delete ret._id;
    delete ret.__v;
  },
});

const User = mongoose.model('User', userSchema);

export default User;