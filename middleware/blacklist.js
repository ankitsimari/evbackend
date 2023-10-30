const { mongoose } = require("../db");

const blacklistSchema = mongoose.Schema({
    token:String
},{
    versionKey:false
})

const blacklist = mongoose.model("blacklist",blacklistSchema);

module.exports={blacklist}