const express = require('express');
const { postModel } = require('../model/post.model');
const { auth } = require('../middleware/auth.middleware');
const postRouter = express.Router();

postRouter.use(auth)

postRouter.post("/add",async(req,res)=>{
    try{
const post = new postModel(req.body);
await post.save();
res.status(200).send({"postAdded":post})
    }
    catch(err){
        res.status(400).send({"err":err})
    }
})


postRouter.get("/",async(req,res)=>{
    try{
        const post = await postModel.find();
        res.status(200).send(post)
    }
    catch(err){
        res.status(400).send({"err":err})
    }
})


postRouter.get("/top",async(req,res)=>{
    const {email}=req.body
    try{
        const Post = await postModel.aggregate([
        {$match: {email:email}},
        {$sort:{no_of_comments:-1}},
        {limit:3}
        ])
        res.status(200).send(Post)
    }
    catch(err){
        res.status(400).send({"err":err})
    }
})


postRouter.patch("/update/:id",async(req,res)=>{
    const {id}=req.params
    try{
    await postModel.findByIdAndUpdate({_id:id},req.body);
    res.status(200).send("post updated")
    }
    catch(err){
        res.status(400).send({"err":err})
    }
})


postRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try{
    await postModel.findByIdAndDelete({_id:id});
    res.status(200).send("post deleted")
    }
    catch(err){
        res.status(400).send({"err":err})
    }
})
module.exports={postRouter}