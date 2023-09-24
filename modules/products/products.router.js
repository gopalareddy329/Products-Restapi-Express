
const { getProductsController,createProductsController,getProductController,deleteProductsController ,filterProductsController} = require("./products.controller")
const Router = require("express")
const productsRouters = Router()
productsRouters.get("/getProducts",getProductsController)
productsRouters.get("/getProduct/:id",getProductController)
productsRouters.post("/createproduct",createProductsController)
productsRouters.post("/filterproducts",filterProductsController)
productsRouters.post("/deleteproducts",deleteProductsController)
module.exports = {productsRouters}