const { response } = require("express");
const crud= require('../models/db.schema');
//imported the data db model and db schema

//user product creation (post method)
const CreateProduct=async(req,res)=>{
    try{
        const ProductCreation=await crud.create(req.body);
        res.status(200).json(ProductCreation);
    }
    catch(err){
        res.status(400).json(err)
 
    }
}

//user product data getting(Get method)
const GetProduct=async(req,res)=>{
    try{
        const ProductData=await crud.find({});
        res.status(200).json(ProductData);
    }
    catch(err){
        res.status(400).json(err)
 
    }
}

// single product data getting(get)
const GetSingleProduct=async(req,res)=>{
    try{
        const{id}=req.params;
        const ProductData=await crud.findById(id);
        res.status(200).json(ProductData);
    }
    catch(err){
        res.status(400).json(err)
 
    }
}

//udpate product data(put)
const UpdateProduct=async(req,res)=>{
    try{
        const{id}=req.params;
        const ProductData=await crud.findByIdAndUpdate(id,req.body);
        if(!ProductData){
            return res.status(404).json({message:"product not found"});
        }
        res.status(200).json(ProductData);
    }
    catch(err){
        res.status(400).json(err)
 
    }
}

// dele product data(delete)

const DeleteProduct=async(req,res)=>{
    try{
        const{id}=req.params;
        const ProductData=await crud.findByIdAndDelete(id);
        if(!ProductData){
            return res.status(404).json({message:"product not found"});
        }
        res.status(200).json({message:"product deleted successfully"});
    }
    catch(err){
        res.status(400).json(err)
 
    }
}

module.exports={
    CreateProduct,GetProduct,GetSingleProduct,UpdateProduct,DeleteProduct
        };

