const Router = require('koa-router')
const diaryService = require('../../services/diaryService')

const router = new Router()

router.patch('/test', async (ctx) => {
    const result = await diaryService.patchTest(ctx.request.body)
    ctx.body = result
})

/**
 * @description YYYY.M.D 운동일지 조회 API
 *
 * @param {number} year 년도
 * @param {number} month 월 ex) 2월 => 1
 * @param {number} date 날짜
 */
router.get('/', async (ctx) => {
    const result = await diaryService.getDiary(ctx.query)
    ctx.body = result
})

/**
 * @description 프로그래명 수정 API
 *
 * @param {string} program 프로그램명 ex) '가슴+삼두'
 * @param {number} year 년도
 * @param {number} month 월 ex) 2월 => 1
 * @param {number} date 날짜
 */
router.patch('/program', async (ctx) => {
    const result = await diaryService.patchProgram(ctx.request.body)
    ctx.body = result
})

/**
 * @description 프로그램 내용 수정 API
 *
 * @param {object} content 프로그램 내용
 * @param {number} year 년도
 * @param {number} month 월 ex) 2월 => 1
 * @param {number} date 날짜
 */
router.patch('/program/content', async (ctx) => {
    const result = await diaryService.patchProgramContent(ctx.request.body)
    ctx.body = result
})
/**
 *
 * @descrption M월 조회 API
 *
 * @param {number} year 년도
 * @param {number} month 월 ex) 2월 => 1
 */
router.get('/month', async (ctx) => {
    const result = await diaryService.getMonth(ctx.query)
    ctx.body = result
})

module.exports = router
