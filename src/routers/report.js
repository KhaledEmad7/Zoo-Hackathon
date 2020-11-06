const express = require('express')
const Report = require('../models/report')

const router = express.Router()

router.post('/reports', async (req, res) => {
    const report = new Report(req.body) 

    try{
        await report.save();

        res.status(201).send(report) 

    } catch(e){
        console.log(req.body);
        res.status(400).send(e) 
    }
})


router.get('/reports', async (req, res) =>{
    
    try {cd
        const ret = await Report.find({})
        res.send(ret)
    } catch(e){
        res.status(500).send()
    }

})


router.delete('/reports/:id', async (req, res) => {
    try{
        const report = await Report.findByIdAndDelete(req.params.id)
        
        if(!report){
            return res.status(404).send()
        }
        res.send(report)

    } catch(e){
        res.status(500).send()
    }
})

module.exports = router