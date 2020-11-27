const Router = require('koa-router')
const diaryService = require('../../services/diaryService')

const router = new Router()

router.get('/', (ctx) => {
    ctx.body = 'DIARY.... GT...!!!'
})

router.patch('/program', async (ctx) => {
    const result = await diaryService.patchProgram(ctx.request.body)
    ctx.body = result
})
module.exports = router
