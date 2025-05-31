const express = require("express")
const colors = require ("colors");

const errorHandler = require("./server/middleware/errorHandler");
const connectDB = require("./server/config/db_config");
require('dotenv').config()


const app = express();
const PORT = process.env.PORT || 5000;
connectDB()

// body parse  

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/uploads', express.static('uploads'));

app.get("/",(req,res)=> {
    res.json({
        msg : "WELCOME TO INFLUENSER API"
    })
})

// auth routes 

app.use("/api/auth", require("./server/routes/authRoutes"))

// rewiew routes

app.use("/api/review",require("./server/routes/reviewRoutes"))

// error Handler

app.use(errorHandler) 


app.listen(PORT,()=> console.log(`SERVER IS RUNNING AT PORT ${PORT}`.bgBlue.white))