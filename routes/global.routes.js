const { productsRouters } = require("../modules/products/products.router") ;

const Router = require("express");
const globalRouter = Router();
globalRouter.use("/",productsRouters)

module.exports = {globalRouter};

