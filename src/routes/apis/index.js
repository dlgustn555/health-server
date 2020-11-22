const Router = require('koa-router')
const diary = require('./diary')

const router = Router()

router.use('/diray', diary.routes())

module.exports = router