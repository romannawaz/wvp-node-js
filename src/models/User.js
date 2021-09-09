const { Schema, model } = require('mongoose')

const schema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    _id: {
        type: String,
        required: true
    }
})

module.exports = model('User', schema)