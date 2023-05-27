const express = require("express")
const { getAllproducts,testAllproducts } =  require("../controllers/products");
const router = express.Router();

router.get("/", getAllproducts);

router.get("/test",testAllproducts)

module.exports =  router