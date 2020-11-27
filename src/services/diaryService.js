const QUERY = require('../utils/query')
const Diary = require('../models/diaryModel')

// "프로그램명" 을 수정한다.
const patchProgram = async ({program, year, month, date}) => {
    const conditions = {todoDate: `${year}.${month}.${date}`}
    const update = {program, todoMonth: `${year}.${month}`}

    return await QUERY.findOneAndUpdate(Diary, conditions, update)
}

// M월을 조회한다.
const getMonth = async ({year, month}) => {
    const filter = {todoDate: {}}
}

module.exports = {
    patchProgram
}
