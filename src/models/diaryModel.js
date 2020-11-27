const mongoose = require('mongoose')

const DiarySchema = new mongoose.Schema({
    todoMonth: String,
    todoDate: String,
    modifyDate: {type: Date, default: Date.now},
    program: String,
    plan: String,
    practice: String
})

module.exports = mongoose.model('diary', DiarySchema)
