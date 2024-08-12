const articles = require('../modal/articleSchema')

exports.addArticle = async(req,res)=>{
    const articleImage = req.file.filename
    const {author, content,date,tittle} = req.body
   // console.log(author,content,tittle);
    try{
        const existingArticle = await articles.findOne({tittle})
        if(existingArticle){
           // console.log(existingArticle);
           // console.log('inside existing');
            res.status(405).json(`Article Already exist`)
        }
        else{
            const newArticle = new articles({
                author, content,date,tittle,articleImage
            })
            await newArticle.save()
            res.status(200).json('Article Added Successfully')
        }

    }

    catch(err){
        res.status(401).json(`req failed due to ${err}`)
    } 


}

exports.getArticles = async(req,res)=>{
    const searchkey = req.query.search
    console.log(searchkey);
    try{
        const query = {
            tittle:{
                $regex:searchkey,$options:'i'//options: to remove case sensitivity
            }
        }
        const result = await articles.find(query)
        //console.log(result);
        res.status(200).json(result)

    }
    catch(err){
        res.status(401).json('error')



    }
}

exports.deleteArticle = async(req,res)=>{
    const {id} = req.params
       //console.log(id);
    try{
        const deletedArticle = await articles.findByIdAndDelete({_id:id})
        //console.log(deletedSchool);
        res.status(200).json(deletedArticle)
    }catch(err){
        //console.log(err);
        res.status(401).json('error')


    }
}

exports.getAArticle = async(req,res)=>{
    const {id} = req.params
       //console.log(id);
    try{
        const seletedArticle = await articles.findOne({_id:id})
        //console.log(deletedSchool);
        res.status(200).json(seletedArticle)
    }catch(err){
        //console.log(err);
        res.status(401).json('error')


    }
}