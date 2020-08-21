const mongoose = require('mongoose')


ProductSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    buildAt: {
        type : Date,
        default : Date.now()
    }
})


const Product = mongoose.model('product', ProductSchema)
module.exports = Product