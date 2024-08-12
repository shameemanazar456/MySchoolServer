const multer  = require('multer')

//storage space in server

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        const filename = `image-${Date.now()}-${file.originalname}`
        callback(null, filename)
    }
})

const fileFilter = (req,file, callback)=>{
    if(file.mimetype == 'image/png'|| file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg'){
        callback(null,true)
    }
    else{
        callback(null, false)
        return callback(new Error ('Only png, jpg, jpeg files are accepted'))
    }
}

//call multer
const multerConfig = multer({

    storage,
    fileFilter
})

module.exports = multerConfig