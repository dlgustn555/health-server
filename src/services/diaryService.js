const mongoose = require('mongoose')
const QUERY = require('../utils/query')
const Diary = require('../models/diaryModel')

// "프로그램" 을 수정한다.
const patchProgram = async ({program, todoDate}) => {
    const conditions = {todoDate: {$eq: new Date(todoDate)}}
    const update = {program}
    return await QUERY.findOneAndUpdate(Diary, conditions, update)
}

module.exports = {
    patchProgram
}
