const schools = require('../modal/schoolSchema')
 
 exports.addSchool = async (req,res)=>{
    console.log('add school');
    
    const userId = req.payload
    console.log(userId);

    //console.log(req.file);

   const schoolImage = req.file.filename
    const {schoolName,schoolRegNo,schoolAffliation,schoolPhoneNo,schoolEmail,schoolWebsite,schoolLocation,schoolDistrict} = req.body

    try{
        const existingSchool = await schools.findOne({schoolRegNo})
        if(existingSchool){
            res.status(406).json('School Already Registered')
        }
        else{
            const newSchool = new schools({
                schoolName,schoolRegNo,schoolAffliation,schoolPhoneNo,schoolEmail,schoolWebsite,schoolLocation,schoolDistrict,schoolImage
            })
            await newSchool.save()
            res.status(200).json(newSchool)
        }
    }
    catch(err){
        res.status(401).json(`req failed due to ${err}`)
    } 
    
    
}

exports.updateSchool = async (req,res)=>{

    const{id} = req.params

    const {schoolName,schoolRegNo,schoolAffliation,schoolPhoneNo,schoolEmail,schoolLocation,schoolWebsite,schoolDistrict,schoolImage,schoolratio,toatalStudents,termFee,avgFee,TotalRating,totalTeacher,avgStudents,totalFee,admissionFee,rating} = req.body 
    console.log(id);
    const uploadImage = req.file?req.file.filename:schoolImage


    try{
        const existingSchool = await schools.findByIdAndUpdate({_id:id},{schoolName,schoolRegNo,schoolAffliation,schoolPhoneNo,schoolEmail,schoolWebsite,schoolLocation,schoolDistrict,uploadImage,schoolratio,toatalStudents,termFee,avgFee,TotalRating,totalTeacher,avgStudents,totalFee,admissionFee,rating},{new:true})
       console.log(existingSchool);
       await existingSchool.save()
        res.status(200).json(existingSchool)
    }
    catch(err){
        res.status(401).json('error')


    }

}
exports.updateSchoolvision = async (req,res)=>{
console.log('inside function');
    const{id} = req.params
    //console.log(req.file);

    const {schoolName,schoolRegNo,schoolAffliation,schoolPhoneNo,schoolEmail,schoolLocation,schoolDistrict,schoolImage,schoolratio,toatalStudents,termFee,avgFee,TotalRating,avgStudents,totalFee,admissionFee,rating,vision,mission,imgPrincipal,principal,imgVicePrincipal,vicePrincipal} = req.body 
    //console.log(id);
    const uploadImage = req.file?req.file.filename:schoolImage
 //   const vicePrincipalImage = req.file?req


    try{
        const existingSchool = await schools.findByIdAndUpdate({_id:id},{schoolName,schoolRegNo,schoolAffliation,schoolPhoneNo,schoolEmail,schoolLocation,schoolDistrict,uploadImage,schoolratio,toatalStudents,termFee,avgFee,TotalRating,avgStudents,totalFee,admissionFee,rating,vision,mission,imgPrincipal,principal,imgVicePrincipal,vicePrincipal},{new:true})
       console.log(existingSchool);
       await existingSchool.save()
        res.status(200).json(existingSchool)
    }
    catch(err){
        res.status(401).json('error')
    }

}

exports.getSchoolList = async (req,res)=>{
    const searchkey = req.query.search
    console.log(searchkey);
    try{
        const query = {
            schoolName:{
                $regex:searchkey,$options:'i'//options: to remove case sensitivity
            }
        }
        const result = await schools.find(query)
        res.status(200).json(result)

    }
    catch(err){
        res.status(401).json('error')


    }
}
exports.deleteSchool = async(req,res)=>{
    const {id} = req.params
       //console.log(id);
    try{
        const deletedSchool = await schools.findByIdAndDelete({_id:id})
        //console.log(deletedSchool);
        res.status(200).json(deletedSchool)
    }catch(err){
        //console.log(err);
        res.status(401).json('error')


    }
}

exports.GetASchool = async(req,res)=>{
    const {id} = req.params
       //console.log(id);
    try{
        const selectedSchool = await schools.findOne({_id:id})
        //console.log(deletedSchool);
        res.status(200).json(selectedSchool)
    }catch(err){
        //console.log(err);
        res.status(401).json('error')


    }
}

exports.getSchoolListUser = async (req,res)=>{
    const searchkey = req.query.search
    console.log(searchkey);
    try{
        const query = {
            schoolLocation:{
                $regex:searchkey,$options:'i'//options: to remove case sensitivity
            }
        }
        const result = await schools.find(query)
        res.status(200).json(result)

    }
    catch(err){
        res.status(401).json('error')


    }
}