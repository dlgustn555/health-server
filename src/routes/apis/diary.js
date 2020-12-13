const Router = require("koa-router");
const diaryService = require("../../services/diaryService");

const router = new Router();

router.patch("/test", async (ctx) => {
  const result = await diaryService.patchTest(ctx.request.body);
  ctx.body = result;
});

/**
 *
 * @descrption M월의 다이어리 조회 API
 *
 * @param {number} year 년도
 * @param {number} month 월 ex) 2월 => 1
 */
router.get("/month/diaries", async (ctx) => {
  const result = await diaryService.getMonthDiaries(ctx.query);
  ctx.body = result;
});

/**
 * @description 프로그램명 추가 API
 *
 * @param {number} year 년도
 * @param {number} month 월 ex) 2월 => 1
 * @param {number} date 날짜
 * @param {number} order 정렬 순서
 * @param {string} program 프로그래명
 */
router.post("/program/name", async (ctx) => {
  const result = await diaryService.addProgramName(ctx.request.body);
  ctx.body = result;
});

/**
 * @description 프로그램명 수정 API
 *
 * @param {string} _id
 * @param {number} order 정렬 순서
 * @param {string} program 프로그래명
 */
router.patch("/program/name", async (ctx) => {
  const result = await diaryService.modifyProgramName(ctx.request.body);
  ctx.body = result;
});

/**
 * @descrption diary._id 인 다이어리 조회 API
 *
 * @param {string} _id 다이어리 _id
 */
router.get("/:_id", async (ctx) => {
  const result = await diaryService.getDiary(ctx.params);
  ctx.body = result;
});

/**
 * @description Plan or Pracitce 프로그램 내용 수정 API
 *
 * @param {string} _id
 * @param {number} order 정렬 순서
 * @param {string} program 프로그래명
 * @param {string} type 프로그램 타입 ex) Plan or Practice
 */
router.patch("/program/content", async (ctx) => {
  const result = await diaryService.modifyProgramContent(ctx.request.body);
  ctx.body = result;
});

/**
 * @description 프로그램 삭제 API
 *
 * @param {string} _id
 */
router.delete("/program/delete/:_id", async (ctx) => {
  const result = await diaryService.deleteProgram(ctx.params);
  ctx.body = result;
});

module.exports = router;
