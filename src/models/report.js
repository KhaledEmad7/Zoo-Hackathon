const mongoose = require('mongoose')


const Report = mongoose.model('Report', {
    animal: {
        type: String,
        required: true
    },
   product: {
        type: String
   },
   sellerName: {
       type: String
   },
   sellerAddress: {
       type: String,
       required: true
   },
   description: {
       type: String
   }
})


module.exports = Report