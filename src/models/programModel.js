const mongoose = require('mongoose')

const ProgramSchema = new mongoose.Schema({
    //_id: Primary Key
    name: String,
    plan: [String],
    practice: [String]
})

module.exports = mongoose.model('program', ProgramSchema)
