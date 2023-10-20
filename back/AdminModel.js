import mongoose from "mongoose";


const AdminSchema =new mongoose.Schema({
    serial:String,
    playername:String,
    aadhar:String,
    agegroup:String,
    position:String,
    state:String,
    tournamentname:String,
    organised:String,
    venue:String,
    action:String,

})
const AdminModel= mongoose.model("admin",AdminSchema)

export  default AdminModel