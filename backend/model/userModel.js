const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    // userId: {
    //     type: String,
    //     required: [true, "Id is required for a user"],
    //     unique: true
    // },
    name: {
        type: String,
        required: true,
        trim: true    
    },
    age: {
        type: Number
    },
    gender: {
        type: String,
        enum: {
            values: ["male", "female", "others"],
            message: "gender can only be from male, female or others"
        }
    },
    email:{
        type: String,
        lowercase: true,     //it will turn the capital into small
        required: [true, "please provide email for signup"],
        validate: [validator.isEmail, "Please provide a valid email address"]
    },
    password: {
        type: String,
        required: [true, "password is required"],
        select: false      //it will not return password in find query untill specify 
    },
    phone:{
        type: String,
        maxlength: [10, "Please check the Mobile no."],
        validate: [validator.isNumeric, "Only numbers are allowed"]
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    cart:{
        type: Array
    },
    wishlist:{
        type: Array
    },
    address:{
        type: String
    },
    registeredOn: {
        type: Date
    },
    isMobileVarified: {
        type: Boolean,
        default: false
    },
    isEmailVarified: {
        type: Boolean,
        default: false
    }
})


const userModel = mongoose.model('users', userSchema);

module.exports = userModel;