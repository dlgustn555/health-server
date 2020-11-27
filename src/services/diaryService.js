const QUERY = require('../utils/query')
const Diary = require('../models/diaryModel')

// "프로그램명" 을 수정한다.
const patchProgram = async ({program, year, month, date}) => {
    const conditions = {todoDate: `${year}.${month}.${date}`}
    const update = {program, todoMonth: `${year}.${month}`}

    return await QUERY.findOneAndUpdate(Diary, conditions, update)
}

// M-1, M, M+1월을 조회한다.
const getMonth = async ({prevMonth, thisMonth, nextMonth}) => {
    const filter = {todoMonth: {$in: [prevMonth, thisMonth, nextMonth]}}
    return await QUERY.find(Diary, filter)
}

module.exports = {
    patchProgram,
    getMonth
}
