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
 * @param {object} program 프로그램 object
 * @param {number} program.order 정렬 순서
 * @param {string} program.name 프로그래명
 * @param {array}  program.plan 프로그램 계획
 * @param {array}  program.practice 프로그램 계획
 
 * @param {number} year 년도
 * @param {number} month 월 ex) 2월 => 1
 * @param {number} date 날짜
 */
router.patch('/program/add', async (ctx) => {
    const result = await diaryService.patchAddProgram(ctx.request.body)
    ctx.body = result
})

/**
 * @description 프로그램 수정 API
 *
 * @param {string} _id Diary key
 * @param {object} program 프로그램 object
 * @param {number} program.order 정렬 순서
 * @param {string} program.name 프로그래명
 * @param {array}  program.plan 프로그램 계획
 * @param {array}  program.practice 프로그램 계획
 */
router.patch('/program/modify', async (ctx) => {
    const result = await diaryService.patchModifyProgram(ctx.request.body)
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
// router.patch('/program/content', async (ctx) => {
//     const result = await diaryService.patchProgramContent(ctx.request.body)
//     ctx.body = result
// })

module.exports = router
