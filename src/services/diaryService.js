const QUERY = require('../utils/query')
const Diary = require('../models/diaryModel')

const patchTest = async ({program, year, month, date}) => {
    const conditions = {test: new Date(year, month, date)}
    const update = {program, todoMonth: new Date(year, month)}
    return await QUERY.findOneAndUpdate(Diary, conditions, update)
}

// "프로그램명" 을 수정한다.
const patchProgram = async ({program, year, month, date}) => {
    const conditions = {date: new Date(year, month, date)}
    const update = {program, month: new Date(year, month)}

    return await QUERY.findOneAndUpdate(Diary, conditions, update)
}

// M월을 조회한다.
const getMonth = async ({year, month}) => {
    const filter = {month: new Date(year, month)}
    return await QUERY.find(Diary, filter)
}

module.exports = {
    patchProgram,
    getMonth,
    patchTest
}
