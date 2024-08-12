const mongoose = require('mongoose')

const schoolSchema = mongoose.Schema({
    schoolName:{
        required:true,
        type:String
    },
    schoolRegNo:{
        required:true,
        type:String
    },
    schoolAffliation:{
        required:true,
        type:String
    },
    schoolPhoneNo:{
        required:true,
        type:String
    },
    
    schoolEmail:{
        required:true,
        type:String
    },
    schoolWebsite:{
        required:true,
        type:String
    },
    schoolLocation:{
        required:true,
        type:String
    },
    schoolDistrict:{
        required:true,
        type:String
    },
    schoolImage:{
        required:true,
        type:String
    },
    schoolratio:{
        type:String
    }, totalTeacher:{
        type:String

    }, toatalStudents:{
        type:String

    },
    termFee:{
        type:String

    }, 
    avgFee:{
        type:String

    },TotalRating:{
        
        type:String

    }, avgStudents:{
        type:String

    },totalFee:{
        type:String
        
    },admissionFee:{
        type:String

    },rating:{
        type:String

    }
  
})

const schools = mongoose.model('schools', schoolSchema)

module.exports = schools
