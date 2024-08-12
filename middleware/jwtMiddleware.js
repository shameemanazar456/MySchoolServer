const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    console.log('inside middleware ')
   //console.log(req.headers);
    const token = req.headers['authorization'].split(' ')[1]
    try{
        const jwtResponse = jwt.verify(token,'supersecretkey')
        console.log(jwtResponse);
        req.payload = jwtResponse.userid
        next()
    }
    catch(error){
        res.status(401).json(`Authorization failed due to ${error}`)
    }
   
}

module.exports = jwtMiddleware
