const Koa = require('koa')
const mongoose = require('mongoose')
const router = require('./routes')

mongoose.connect('mongodb://localhost:27017/health', {useUnifiedTopology: true, useNewUrlParser: true})

const db = mongoose.connection;
db.on('error', function() {
    console.log('[MONGODB] Connection ERROR!!')
});
db.once('open', function() {
    console.log('[MONGODB] Connection SUCCESS!!')
});

const server = new Koa()

server.use(router.routes());

server.use(router.routes())
server.listen(7500, () => {
    console.log('[SERVER] Running In PORT: 7500')
})
