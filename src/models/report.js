const mongoose = require('mongoose')


const Report = mongoose.model('Report', {
    animal: {
            type: String,
            required: true
        },
   product: {
           type: String,
           deafult: "Unknown"
       },
   sellerName: {
       type: String,
       default: "Unknown"
   },
   sellerAddress: {
       type: String,
       required: true
   },
   description: {
       type: String,
       default: "No description"
   }
})


module.exports = Report