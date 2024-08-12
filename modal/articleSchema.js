const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    author:{
        required:true,
        type:String
    },
    tittle:{
        required:true,
        type:String
    },
    content:{
        required:true,
        type:String
    },
    date:{
        required:true,
        type:String
    },
    articleImage:{
        required:true,
        type:String
    }
    
})

const articles = mongoose.model('articles', articleSchema)

module.exports = articles
