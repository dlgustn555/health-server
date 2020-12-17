const mongoose = require("mongoose");
const QUERY = require("../utils/query");
const Diary = require("../models/diaryModel");

const patchTest = async ({ program, year, month, date }) => {
  const conditions = { test: new Date(year, month, date) };
  const update = { program, todoMonth: new Date(year, month) };
  return await QUERY.findOneAndUpdate(Diary, conditions, update);
};

// _id로 운동일지를 조회한다.
const getDiary = async ({ _id }) => {
  const filter = { _id };
  return await QUERY.findById(Diary, filter);
};

// YYYY.M월을 조회한다.
const getMonthDiaries = async ({ year, month }) => {
  const filter = { year, month };
  return await QUERY.find(Diary, filter);
};

// "프로그램명" 을 추가한다.
const addProgramName = async ({ year, month, date, order, program }) => {
  const diary = new Diary({
    year,
    month,
    date,
    order,
    program,
    plan: [],
    practice: [],
    images: [],
  });
  return await QUERY.save(diary);
};

// "프로그램명" 을 수정한다.
const modifyProgramName = async ({ _id, program }) => {
  const conditions = { _id };
  const update = { program };
  return await QUERY.findOneAndUpdate(Diary, conditions, update);
};

// "Plan or Practice" 프로그램 내용을 수정한다.
const modifyProgramContent = async ({ _id, order, program, type }) => {
  const conditions = { _id };
  const target = `${type}.${order}`;
  const update = { $set: { [target]: program } };
  return await QUERY.findOneAndUpdate(Diary, conditions, update);
};

// "프로그램" 을 삭제한다.
const deleteProgram = async ({ _id }) => {
  const conditions = { _id };
  return await QUERY.findOneAndDelete(Diary, conditions);
};

// "프로그램" 일부 콘텐츠를 삭제한다.
const deleteProgramContent = async ({ _id, order, type }) => {
  const conditions = { _id };

  const result = await QUERY.findOneAndUpdate(Diary, conditions, {
    $set: { [`${type}.${order}`]: null },
  });

  if (!result.success) {
    return result;
  }

  return await QUERY.findOneAndUpdate(Diary, conditions, {
    $pull: { [type]: null },
  });
};

// 업로드한 이미지 binary 를 수정한다.
const updateUploadImage = async ({ _id, order, file }) => {
  const conditions = { _id };
  const target = `images.${order}`;
  const update = { $set: { [target]: file } };
  return await QUERY.findOneAndUpdate(Diary, conditions, update);
};

module.exports = {
  getDiary,
  addProgramName,
  modifyProgramName,
  getMonthDiaries,
  modifyProgramContent,
  deleteProgram,
  deleteProgramContent,
  updateUploadImage,
  patchTest,
};
