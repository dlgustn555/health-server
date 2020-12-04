const mongoose = require('mongoose')
const QUERY = require('../utils/query')
const Diary = require('../models/diaryModel')

const patchTest = async ({program, year, month, date}) => {
    const conditions = {test: new Date(year, month, date)}
    const update = {program, todoMonth: new Date(year, month)}
    return await QUERY.findOneAndUpdate(Diary, conditions, update)
}

// YYYY.M월을 조회한다.
const getMonth = async ({year, month}) => {
    const filter = {year, month}
    return await QUERY.find(Diary, filter)
}

// YYYY.M.D 운동일지 조회한다.
const getDiary = async ({year, month, date}) => {
    const filter = {year, month, date}
    return await QUERY.findOne(Diary, filter)
}

// "프로그램" 을 수정한다.
const patchProgram = async ({program, year, month, date}) => {
    const conditions = {year, month, date, 'programs.order': program.order}
    const update = {$set: {'programs.$': program}}

    return await QUERY.findOneAndUpdate(Diary, conditions, update)
}

// "프로그램 내용"을 수정한다.
const patchProgramContent = async ({content, year, month, date}) => {
    const conditions = {year, month, date}
    const update = {...content}
    return await QUERY.findOneAndUpdate(Diary, conditions, update)
}

module.exports = {
    getDiary,
    patchProgram,
    patchProgramContent,
    getMonth,
    patchTest
}
