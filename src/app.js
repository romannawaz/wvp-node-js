const express = require('express'),
    app = express(),
    routes = require('./routes/index')

const mongoose = require('mongoose')

const bodyParser = require('body-parser')

const cors = require('cors')

// const HOST = '127.0.0.1' 
const PORT = process.env.PORT || 3000

const uri = "mongodb+srv://tyfts:1234@cluster0.ywurn.mongodb.net/users"

async function start() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true
        })

        app.use(bodyParser.urlencoded({ extended: false }))

        app.use(bodyParser.json())

        app.use(cors())

        app.use('/api', routes)

        app.listen(PORT, () => {
            console.log('Server is started')
        })
    }
    catch (e) {
        console.log(e)
    }
}

start()