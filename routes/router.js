const express = require('express');
const router =  express.Router()
const studentSchema = require('../Schema/student');




router.get('/', async(req,res) =>
{
    try
    {
        const student =  await studentSchema.get()
        console.log(student)
        if(!student)
        {
           res.status(404).send({
               statuscode :false,
               message:"No data in Database"
           })
        }
        else
        {
           res.status(200).send({
               statuscode:true,
               message:"Student List :",
               data:student
           })
        }
        }
        catch(err)
        {
           res.status(404).send({
               statuscode :false,
               message:"Invalid data"
           })
        }
})
router.post('/',async(req,res)=>
{
    try
    {
        const addStud = await studentSchema.insert(req.body);
        if(!addStud)
        {
           res.status(404).send({
               statuscode :false,
               message:"No data is added"
           })
        }
        else
        {
           res.status(200).send({
               statuscode:true,
               message:"Data is Add sucessfull....",
           })
        }
    }
    catch(err)
        {
           res.status(404).send({
               statuscode :false,
               message:"Invalid data"
           })
        }
})

router.patch('/:_id',async(req,res) =>
{
    try
    {
    const id = req.params._id
    //req.body.UpdateAt = new Date();
    
    const updateStud = await studentSchema.updateOne(req.body,{_id:id})
    console.log(updateStud)
        if(updateStud.modifiedCount == 1)
        {
           res.status(200).send({
               statuscode :true,
               message:"Data is Updated sucessfull....",
           })
        }
        else
        {
           res.status(404).send({
               statuscode:false,
               message:"No data is Update"
           })
        }
    }
    catch(err)
        {
           res.status(404).send({
               statuscode :false,
               message:"Invalid data"
           })
           console.log(err.stack)
        }
})

router.delete('/:_id', async(req,res) =>
{
    try
    {
        const id = req.params._id
        const deleteData = await studentSchema.deleteOne({_id:id})
        if(deleteData.deletedCount == 1)
        {
            res.status(200).send({
                statuscode:true,
                message:"Data is Delete sucessfull....",
            })
        }
        else
        {
            res.status(404).send({
                statuscode:false,
                message:"Data is Not Found....",
            })
        }
        
           console.log(deleteData)
    }
    catch(err)
        {
           res.status(404).send({
               statuscode :false,
               message:"Invalid data"
           })
           console.log(err.stack)
        }
})
module.exports =router