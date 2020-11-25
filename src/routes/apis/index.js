const Router = require('koa-router')
const diary = require('./diary')

const router = Router()

router.use('/diary', diary.routes())

module.exports = router
