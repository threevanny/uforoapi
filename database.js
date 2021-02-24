const mongoose = require('mongoose')
const config = require('./config/config').get(process.env.NODE_ENV)

mongoose.Promise = global.Promise
mongoose.connect(config.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('Connection DB established')
).catch(err => console.log(err))