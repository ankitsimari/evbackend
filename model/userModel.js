// name ==> String
// email ==> String
// gender ==> String
// password ==> String
// age ==> Number
// city ==> String
// is_married ==> boolean

const { mongoose } = require("../db");

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    password:String,
    age:Number,
    city:String,
    is_married:Boolean
})

const userModel = mongoose.model("usersList",userSchema);

module.exports={userModel}