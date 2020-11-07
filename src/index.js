const express = require('express') 
const path = require('path') 
require('./db/mongoose') 
const reportRouter = require('./routers/report') 

const app = express() 
const port = process.env.PORT
const htmlDir = path.join(__dirname, '../public') 

app.use(express.json()) 
app.use(express.static(htmlDir))
app.use(reportRouter)



app.listen(port, () => {
    console.log("Server is up at port " + port) 
}) 