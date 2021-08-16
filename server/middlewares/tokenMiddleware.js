const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const User = require('../models/User')

const tokenMiddleware = async (req, res, next) => {
    try {
        const token = req.header("auth-token")
        if (!token)
            return res.status(401).json({ errors: [{ msg: 'UNTHORIZED OPERATION !' }] })
        const payload = await jwt.verify(token, process.env.JWT_SECRET)
        req.userId = payload.sub
      
        next()
    }
    catch (err) {
        res.status(401).json({ errors: [{ msg: err.message }] })
    }
}
const adminMiddleware = async (req, res, next) => {
  const user =await User.findById(req.userId)
   if(user && user.role ==='admin')
   next()
   else
   res.json("unothorized")
}
module.exports = { tokenMiddleware, adminMiddleware  }