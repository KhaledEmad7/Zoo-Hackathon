const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'Zoo-Hackathon-api';

mongoose.connect(`${connectionURL}/${databaseName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
