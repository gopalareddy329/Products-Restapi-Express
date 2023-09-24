const {createProductsServices,getProductServices,createProductServices,deleteProductsServices,filterProductsServices}=require("./products.services")

module.exports = {
    getProductsController:(req,res)=>{
        getProductServices((err,result)=>{
            if (err){
                res.send("error")
            }
            else{
                res.json(result)
            }
        })
        
    },
    getProductController:(req,res)=>{
        const id=req.params.id

        createProductServices(id,(err,result)=>{
            if (err){
                res.send(err)
            }
            else{
                res.json(result)
            }
        })
        
    },
    createProductsController:(req,res)=>{
        const product_name = req.body.product_name;
        const description=req.body.description;
        const price=req.body.price;
        const discountPercentage = req.body.discountPercentage;
        const rating=req.body.rating;
        const brand=req.body.brand;
        const category = req.body.category;
        const images=req.body.images
        createProductsServices(product_name,description,price,discountPercentage,rating,brand,category,images,(err,result)=>{
            if (err){
                res.send(err)
            }
            else{
                res.json(result)
            }
        });
        
    },

    filterProductsController:(req,res)=>{
        const product_name = req.body.product_name;
        filterProductsServices(product_name,(err,result)=>{
            if (err){
                res.send("error")
            }
            else{
                res.json(result)
            }
        })
    },
    deleteProductsController:(req,res)=>{
        const id = req.body.id;
        deleteProductsServices(id,(err,result)=>{
            if (err){
                res.send("error")
            }
            else{
                res.json(result)
            }
        })
    }
}