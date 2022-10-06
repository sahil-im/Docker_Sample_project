const express = require('express');
const mongoose = require('mongoose');

const studSchema  = new mongoose.Schema({
    Name:
    {
        type:String,
        required:true,
    },
    Email:
    {
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    Phone:
    {
        type:Number,
        required:true,
        unique:true
    },
    address:
    {
        type:String,
        required:true,
    },
    type:
    {
        type:String,
        required:true,
    },
    CreatedAt:
    {
        type:Date,
        default:  new Date()    
    } ,
    UpdateAt:
    {
        type:Date,
        default:  new Date()
    }
});

let Model = mongoose.model('studentData',studSchema);

get = async() =>
 {
    try
    {
        const get  = await Model.find();
        console.log("get",get)
        return get
    }
    catch(err)
    {
        return err
    }
 }

insert = async(req) =>
 {
    try
    {
        const addstudent  = await Model(req).save();
        return addstudent
    }
    catch(err)
    {
        return err
    }
 }
 updateOne =async(req,query) =>
{
    try
    {
        req.UpdateAt =new Date();
        req.type ="student"
       const updateData  = await Model.updateOne(query,
        {
        $set:req
       })
       return updateData
    }
    catch(err)
    {
        return err
    }
}
deleteOne = async(query)=>
{
    try
    {
         const deleteData = await Model.deleteOne(query);
         return deleteData
    }
    catch(err)
    {
        return err
    }
}
module.exports = {
    get,
    insert,
    updateOne,
    deleteOne
}