const Router = require('koa-router')
const diaryService = require('../../services/diaryService')

const router = new Router()

router.patch('/test', async (ctx) => {
    const result = await diaryService.patchTest(ctx.request.body)
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

/**
 * @description YYYY.M.D 운동일지 조회 API
 *
 * @param {number} year 년도
 * @param {number} month 월 ex) 2월 => 1
 * @param {number} date 날짜
 */
router.get('/date', async (ctx) => {
    const result = await diaryService.getDiary(ctx.query)
    ctx.body = result
})


/**
 * @description 프로그램 추가 API
 *
 * @param {number} year 년도
 * @param {number} month 월 ex) 2월 => 1
 * @param {number} date 날짜
 * @param {number} order 정렬 순서
 * @param {string} program 프로그래명
 */
router.post('/program/add', async (ctx) => {
    const result = await diaryService.addProgram(ctx.request.body)
    ctx.body = result
})

/**
 * @description 프로그램명 수정 API
 *
 * @param {string} _id 
 * @param {number} order 정렬 순서
 * @param {string} program 프로그래명
 */
router.patch('/program/modify', async (ctx) => {
    const result = await diaryService.modifyProgram(ctx.request.body)
    ctx.body = result
})

module.exports = router
