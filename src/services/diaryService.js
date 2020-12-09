const mongoose = require('mongoose')
const QUERY = require('../utils/query')
const Diary = require('../models/diaryModel')

const patchTest = async ({program, year, month, date}) => {
    const conditions = {test: new Date(year, month, date)}
    const update = {program, todoMonth: new Date(year, month)}
    return await QUERY.findOneAndUpdate(Diary, conditions, update)
}

// _id로 운동일지를 조회한다.
const getDiary = async ({_id}) => {
    const filter = {_id}
    return await QUERY.findById(Diary, filter)
}

// YYYY.M월을 조회한다.
const getMonthDiaries = async ({year, month}) => {
    const filter = {year, month}
    return await QUERY.find(Diary, filter)
}

// "프로그램명" 을 추가한다.
const addProgramName = async ({year, month, date, order, program}) => {
    const diary = new Diary({
        year, month, date, order, program, plan: [], practice: []
    })
    return await QUERY.save(diary)
}

// "프로그램명" 을 수정한다.
const modifyProgramName = async ({_id, program}) => {
    const conditions = {_id}
    const update = {program}
    return await QUERY.findOneAndUpdate(Diary, conditions, update)
}

// "Plan or Practice" 프로그램 내용을 수정한다.
const modifyProgramContent = async ({_id, order, program, type}) => {
    const conditions = {_id}
    const target = `${type}.${order}`
    const update = {$set: {[target]: program}}
    return await QUERY.findOneAndUpdate(Diary, conditions, update)
}

module.exports = {
    getDiary,
    addProgramName,
    modifyProgramName,
    getMonthDiaries,
    modifyProgramContent,
    patchTest
}
