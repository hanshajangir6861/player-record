import mongoose from "mongoose";


const AdminSchema =new mongoose.Schema({
    serial: String,
    aadharno: String,
    playername: String,
    game: String,
    agegroup: String,
    position: String,
    state: String,
    tournamentname: String,
    organisedat: String,
    venue: String,
    action: String
    

})
const AdminModel= mongoose.model("admin", AdminSchema)

export  default AdminModel