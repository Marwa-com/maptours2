const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }, (err) => {
        if (err) throw err
        console.log('DB Connected...')
    })
}
module.exports = dbConnect