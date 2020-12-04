const mongoose = require('mongoose')

const ProgramSchema = new mongoose.Schema({
    order: Number,
    name: String,
    plan: [String],
    practice: [String]
})

const DiarySchema = new mongoose.Schema({
    //_id: Primary Key
    year: Number,
    month: Number,
    date: Number,
    programs: [ProgramSchema],
    modifyDate: {type: Date, default: Date.now}
})

module.exports = mongoose.model('diary', DiarySchema)
