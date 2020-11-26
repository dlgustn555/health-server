const Router = require('koa-router')
const diaryService = require('../../services/diaryService')

const router = new Router()

router.get('/', (ctx) => {
    ctx.body = 'DIARY.... GT...!!!'
})

router.patch('/program', (ctx) => {
    const {program} = ctx.request.body
    diaryService.patchProgram(program)
    ctx.body = 'SUCCSS'
})
module.exports = router
