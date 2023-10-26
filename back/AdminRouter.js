import express from 'express'
import AdminModel from './AdminModel.js'


const AdminRouter = express.Router()

AdminRouter.get("/" ,async(req,res)=>{
const result = await AdminModel.find()
res.json(result)

})

AdminRouter.post("/add", async(req,res)=>{
const AdminToAdd = new AdminModel(req.body) 
let result = await AdminToAdd.save()
res.json(result)
})

AdminRouter.get("/search/:id",async(req,res)=>{
const searchToUser = req.params.id 
const ItemId =  await AdminModel.findOne({aadharno:searchToUser})
res.json(ItemId)
})

export default  AdminRouter