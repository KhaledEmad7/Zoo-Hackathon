const express = require('express') 
require('./db/mongoose') 
const reportRouter = require('./routers/report') 

const app = express() 
const port = process.env.PORT || 3000 

app.use(express.json()) 
app.use(reportRouter);

app.listen(port, () => {
    console.log("Server is up at port " + port) 
}) 