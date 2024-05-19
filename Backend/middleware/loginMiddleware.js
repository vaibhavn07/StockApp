const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_KEY = 'vaibhavn2007@gmail.com'
async function loginMiddleware (req,res,next){
    const token = req.header('auth-token')
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data =await jwt.verify(token,JWT_KEY);
        req.user = data.user;
        next();

    } catch (e) {
        // return res.status(401).json({ error: "Please authenticate using a valid token" })
        console.log('error',e);
        // return res.json("error");
    }
}
module.exports = loginMiddleware;