const mongoose = require('mongoose')

const DiarySchema = new mongoose.Schema({
    year: Number,
    month: Number,
    date: Number,
    program: String,
    plan: String,
    practice: String,
    modifyDate: {type: Date, default: Date.now}
})

module.exports = mongoose.model('diary', DiarySchema)
