  
const express = require('express')
const dbConnect = require('./helpers/dbConnect')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 5000
dbConnect()
//middlewares
app.use(cors())
const path = require('path')
app.use(express.json({ limit: '50mb' }))
app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/post', require('./routes/postRoutes'))

const dirName = path.resolve()
if(process.env.NODE_ENV === "production"){

    app.use(express.static(path.join(dirName,'/client/build')))
    console.log(dirName)
    app.get('*',(req,res)=>res.sendFile(path.join(dirName,  'client','build','index.html')))
}else{
    app.get('/',(req,res)=>{
        res.send('app is running')
    })
}
app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`)
})

