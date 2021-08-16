const mongoose = require('mongoose')
const moment = require('moment-timezone')
const Schema = mongoose.Schema

const userSchema = Schema({
    firstname: String,
    lastname: String,
    nickname:String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: moment(Date.now()).tz('Europe/Paris').format('LLLL')
    },
    image: {
       type: mongoose.Schema.Types.Mixed
    },
    role: {
        type: String,
        enum: ['user','ambassador','admin'],
        default: 'user'
    },
    points: {
        type: Number,
        default:0
    },
    isBanned: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('user', userSchema)