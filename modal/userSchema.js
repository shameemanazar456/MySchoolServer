//model for users collection

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        require:true,
        type:String
    },
    email:{
        require:true,
        type:String
    },
    password:{
        require:true,
        type:String
    },
    favorites:{
        type:Array
    }
})

const users = mongoose.model('users',userSchema)

module.exports = users