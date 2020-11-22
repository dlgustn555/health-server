const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/health', {useUnifiedTopology: true, useNewUrlParser: true})

const db = mongoose.connection;
db.on('error', function() {
    console.log('[MONGODB] Connection ERROR!!')
});
db.once('open', function() {
    console.log('[MONGODB] Connection SUCCESS!!')
});

console.log('RUNNING!!')