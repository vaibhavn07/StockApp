const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    stocks:[{
        type:String,
    }]
})


const User = mongoose.model('USERS',UserSchema);
module.exports = User;