//router.js file routes each request to a particular path
//import express
const express = require('express')

//import usercontroller

const usercontroller= require('./controller/userController')

const schoolcontroller = require('./controller/schoolController')

const jwtmiddleware = require('./middleware/jwtMiddleware')

const multerConfig = require('./middleware/multerMiddleware')

const articleController = require('./controller/articleController')

//2) to create router - use class 'Router' in express library

const router = new express.Router()

//path to resolve register request

router.post('/user/register',usercontroller.register)

router.post('/user/login',usercontroller.login)

//admin requests

router.post('/AddSchool',multerConfig.single('schoolImage') ,jwtmiddleware,schoolcontroller.addSchool)

router.put('/updateSchool/:id',jwtmiddleware, multerConfig.single('schoolImage') ,schoolcontroller.updateSchool)

router.put('/updateSchoolvision/:id',jwtmiddleware, multerConfig.fields([{name:"schoolImage",maxCount:1},{name:"imgPrincipal",maxCount:1},{name:"imgVicePrincipal",maxCount:1}]) ,schoolcontroller.updateSchoolvision)

router.get('/schoollist', schoolcontroller.getSchoolList)

router.delete('/deleteschool/:id', jwtmiddleware, schoolcontroller.deleteSchool)

router.post('/addArticle',multerConfig.single('articleImage'), jwtmiddleware,articleController.addArticle)

router.get('/articles', articleController.getArticles)

router.delete('/deleteArticle/:id', jwtmiddleware, articleController.deleteArticle)

router.get('/getASchoolschool/:id',jwtmiddleware,schoolcontroller.GetASchool)

router.get('/getschoollist', schoolcontroller.getSchoolListUser)

router.get('/getAArticle/:id',jwtmiddleware,articleController.getAArticle)



//export router
module.exports = router