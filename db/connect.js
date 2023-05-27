const mongoose = require("mongoose");

const db = () => {mongoose.connect("mongodb://localhost:27017",{
    dbName:"node_date27"
})
.then((c)=>console.log("Database connected to"))
.catch(()=>console.log(`Error in connecting`))
}

module.exports = db