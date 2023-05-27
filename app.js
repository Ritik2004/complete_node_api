
const express = require("express")
const app = express();
const PORT = 8000;
const config = require("dotenv")

const pro_routes = require("./routes/products")
const db = require('./db/connect')

//middleawre or set routes
db();

app.use("/api/products",pro_routes)

app.get("/",(req,res)=>{
 res.send("hi i am here")
})

app.listen(PORT, ()=>{
   console.log(`server running on port ${PORT}`)
})