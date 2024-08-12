const mongoose = require('mongoose')

const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log('Mongodb Connected Successfully');
}).catch((err)=>{
    console.log(err);
})