const mongoose = require('mongoose')

const DiarySchema = new mongoose.Schema({
    todoDate: {type: Date},
    modifyDate: {type: Date, default: Date.now},
    program: String,
    plan: String,
    practice: String
})

module.exports = mongoose.model('diary', DiarySchema)
