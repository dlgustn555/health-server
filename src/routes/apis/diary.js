const Router = require('koa-router')
const diaryService = require('../../services/diaryService')

const router = new Router()

router.get('/', (ctx) => {
    ctx.body = 'DIARY.... GT...!!!'
})

/**
 * @description 프로그래명 수정 API
 *
 * @param {string} program 프로그램명 ex) '가슴+삼두'
 * @param {number} year 년도
 * @param {number} month 월 ex) 2월 => 2
 * @param {number} date 날짜
 */
router.patch('/program', async (ctx) => {
    const result = await diaryService.patchProgram(ctx.request.body)
    ctx.body = result
})

/**
 *
 * @descrption M-1, M, M+1월 조회 API
 *
 * @param {string} prevMonth M-1월 ex) '2020.9'
 * @param {string} thisMonth 조회할 M월 ex) '2020.10'
 * @param {string} nextMonth M+1월 ex) '2020.11'
 */
router.get('/month', async (ctx) => {
    const result = await diaryService.getMonth(ctx.query)
    ctx.body = result
})

module.exports = router
