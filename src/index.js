const Koa = require('koa')
const Router = require('koa-router');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/health', {useUnifiedTopology: true, useNewUrlParser: true})

const db = mongoose.connection;
db.on('error', function() {
    console.log('[MONGODB] Connection ERROR!!')
});
db.once('open', function() {
    console.log('[MONGODB] Connection SUCCESS!!')
});

const server = new Koa()
const router = Router()

// router.use('/api', )
router.get('/', (ctx) => {
    ctx.body = 'GET TEST!!!'
})

server.use(router.routes());
server.use(router.allowedMethods());

server.listen(7500, () => {
    console.log('[SERVER] Running In PORT: 7500')
})
