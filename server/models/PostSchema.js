const mongoose = require('mongoose')
const moment = require('moment-timezone')

const postSchema = mongoose.Schema({
    title:String,
    description: String,
    address: String,
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    Category: {
        type: String,
        enum: ['restaurants and cafes','Hotels and parks','craft center'],
    },
    isValidate: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: moment(Date.now()).tz('Europe/Paris').format('LLLL')
    },
    image: {
        type: mongoose.Schema.Types.Mixed
    },
    likes :Array,
    likecount: {
        type: Number,
        default: 0,
    },
    Rate: Number 
})

module.exports = mongoose.model('post', postSchema)