const mongoose = require('mongoose')
const Diary = require('../models/diaryModel')

const patchProgram = ({program, todoDate}) => {
    console.log(program, todoDate)
    return Diary.findOneAndUpdate({todoDate: {$eq: new Date(todoDate)}}, {program})
}

module.exports = {
    patchProgram
}
