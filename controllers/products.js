 const Product = require('../models/product')

 const getAllproducts = async (req,res) => {
     try{
        const {company , name, sort ,select} = req.query;
        const queryObject = {};

        if(company){
            queryObject.company = company
        }

        if(name){
            queryObject.name = name;
        }

        let apiData = Product.find(queryObject)

        if(sort){
            let sortFix = sort.replace(",", " ");
           apiData = apiData.sort(sortFix)
        }
        if(select){
            let selectFix = select.split(",").join(" ");
            apiData = apiData.select(selectFix)
        }

        //this for pagination
           let page = Number(req.query.page) || 1
           let limit = Number(req.query.limit) || 3;

           let skip = (page-1)*limit;
           apiData = apiData.skip(skip).limit(limit)

        const myData = await apiData;
      res.status(200).json({myData})
     }
     catch(error){
    console.log(error);
     }
}
// Query parameters are commonly used to pass filtering, sorting, or pagination options to APIs or to perform searches. They provide a way to include additional information in the URL that the server can use to process the request and generate the appropriate response.
 const testAllproducts = async (req,res) => {
    try{
        const myData = await Product.find(req.query).sort("-name");
        res.status(200).json({myData})
    }
    catch(error){
   console.log(error);
    }
}
module.exports = {getAllproducts, testAllproducts}