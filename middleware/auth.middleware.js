const jwt = require('jsonwebtoken');
const { blacklist } = require('./blacklist');


const auth = async(req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1];
    try{
        const expire = await blacklist.findOne({token});
        if(!expire){
            jwt.verify(token, 'Ankit', (err, decoded)=> {
                if(decoded){
                    req.body.email=decoded.email
                    next()
                }else{
                    res.send({"err":"login First"})
                }
              });
        }else{
            res.send({"msg":"not authorized"})
        }
    }
    catch(err){
        res.status(400).send({"err":err})
    }
}

module.exports={auth}