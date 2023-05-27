const connectDB = require('./db/connect')

const Product = require("./models/product")


 const ProductJson = require('./product.json');

 const start = async () => {
    try{
        await connectDB("mongodb://localhost:27017");
        
        await Product.deleteMany()
        await Product.create(ProductJson);
       
        console.log("success")
    } catch(error){
        console.log(error)
    }
 }

 start();