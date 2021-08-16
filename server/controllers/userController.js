const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const cloudianry = require('../helpers/cloudianry')

const { validationResult } = require('express-validator')

const register = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.mapped() })
        const { firstname, lastname, nickname, password, email,image } = req.body
        const user = await User.findOne({ email })
        if (user)
            return res.status(400).json({ errors: [{ msg: 'User exist !' }] })
        const newUser = new User({
            firstname,
            lastname,
            nickname,
            password,
            email
        })
         if (image) {
            const savedImage = await cloudianry.uploader.upload(image, {
                timeout: 60000,
                upload_preset: "my_app"
            })
            newUser.image = {
                url: savedImage.url,
                public_id: savedImage.public_id
            }
        }

        //cryptage du password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(newUser.password, salt)
        newUser.password = hash

        const registredUser = await newUser.save()
        const payload = {
            sub: registredUser._id
        }
        const token = await jwt.sign(payload, process.env.JWT_SECRET)
        res.json({ token })

    }
    catch (err) {
        res.status(500).json({ errors: [{ msg: err.message }] })
    }
}
  //login
const login = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.mapped() })
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user)
            return res.status(404).json({ errors: [{ msg: 'please register before' }] })
        if (user.isBanned) {
            return res.status(401).json({ err: "YOU ARE BANNED" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch)
            return res.status(404).json({ errors: [{ msg: 'wrong password' }] })
        const payload = {
            sub: user._id
        }
        const token = await jwt.sign(payload, process.env.JWT_SECRET)
        res.json({ token })

    } catch (err) {
        res.status(500).json({ errors: [{ msg: err.message }] })
    }
}
   //getUserProfile
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select({ password: 0, _v: 0 })
        res.json(user)
    }
    catch (err) {
        res.status(500).json({ errors: [{ msg: err.message }] })
    }
}
// @access Private/admin/ get users
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);

  });
  // @access Private/admin / delete user
 const deleteUser = async(req, res) => {
    try {
       await User.findByIdAndDelete(req.params.id)
       res.json('user is deleted')
    }
    catch (err) {
      res.status(500).json({ errors: [{ msg: err.message }] })
  }
  };
   
  // @access Private/admin /update user
  const updateUser = async (req, res) => {
  const updateData = req.body;
  try {
    await User.findByIdAndUpdate(req.params.id, updateData)
    res.json('user is updated')
  }
  catch (err) {
     res.status(400).json({ errors: [{ msg: err.message }] })
  }
};
module.exports = { register, login, getUserProfile,getUsers ,deleteUser,updateUser }