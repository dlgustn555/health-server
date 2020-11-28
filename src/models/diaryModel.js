const mongoose = require('mongoose')

const DiarySchema = new mongoose.Schema({
    date: {type: Date},
    month: {type: Date},
    program: String,
    plan: String,
    practice: String,
    modifyDate: {type: Date, default: Date.now}
})

module.exports = mongoose.model('diary', DiarySchema)
