const mongoose = require('mongoose')

const connectionURL = process.env.MONGODB_URL;
const databaseName = 'Zoo-Hackathon-api';

mongoose.connect(`${connectionURL}/${databaseName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
