const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')
const router = require('./routes')

// Node.js의 native Promise 사용
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/health', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

const db = mongoose.connection
db.on('error', function () {
    console.log('[MONGODB] Connection ERROR!!')
})
db.once('open', function () {
    console.log('[MONGODB] Connection SUCCESS!!')
})

const server = new Koa()

server.use(bodyParser())
server.use(router.routes())

server.use(router.routes())
server.listen(7500, () => {
    console.log('[SERVER] Running In PORT: 7500')
})
