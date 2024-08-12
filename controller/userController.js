// logic to resolve register request

const users = require("../modal/userSchema");
//jsonwebtoken import 
const jwt = require('jsonwebtoken')

exports.register = async(req,res)=>{
    console.log('inside regster request');
    const{username,email, password}= req.body
    console.log(username,email);
    try{
        const existingUser = await users.findOne({email:email})
        if(existingUser){
            res.status(406).json('Account Already Exist')
        }
        else{

            const newUser = new users({
                username,
                email,
                password,
                favorites:[]
            })
            await newUser.save()
            res.status(200).json(newUser)
        }


    }
    catch(err){
        res.status(401).json(err)

    }

}

exports.login = async(req,res)=>{
    console.log('inside login');

    const{email,password}=req.body;
    console.log(req.body);
    try{

        const existingUser = await users.findOne({email:email,password})
        if(existingUser){
            //token generated using sign method for authorization
            const token = jwt.sign({userid:existingUser._id},'supersecretkey')
            res.status(200).json({existingUser,token})
        }
        else{
            res.status(406).json('Account Does not exist')
        }

    }catch(err){
        res.status(401).json(err)
    }

}