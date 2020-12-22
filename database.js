const mongoose = require('mongoose');
require('dotenv').config();

const monogDB_Local_URI = 'mongodb://localhost/uforo'
const mongoDB_URI = process.env.MONGODB_URI || monogDB_Local_URI;

mongoose.connect(mongoDB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    return console.log("Connection DB established");
}).catch(err => {
    return console.log(err);
});