import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import AdminRouter from "./AdminRouter.js";



const app = express()

const connection = mongoose.connect("mongodb://127.0.0.1:27017/Form")

const port = 8080

app.use(cors())

app.use(express.json())
app.use("/form" , AdminRouter)

connection.then(() => {
    app.listen(port, () =>
        console.log("Server started at port " + port))
})
.catch((err) => console.log("DB ERROR: " + err));
