const { mongoose } = require("../db");

const postSchema = mongoose.Schema({
    title:String,
    body:String,
    device:String,
    no_of_comments:Number,
    email:String
})

const postModel = mongoose.model("postList",postSchema);


module.exports={postModel}