const jwt = require('jsonwebtoken');
const keys = require('./keys');
module.exports = (req,res,next)=>{
    try{
        const auth = req.headers.authorization.split(" ")[1];
        console.log(auth);
        const decoded = jwt.verify(auth, keys.jwtSecret);
        req.user = decoded;
        next();
    }catch(error){
        return res.json({msg: 'Auth Failed'})
    }
}