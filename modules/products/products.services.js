const {connection} =require('../../db/db_config.js')

const getProductServices = (
    callback
) =>{
    connection.query("SELECT * FROM `products`" ,(err,result)=>{//replace product with you table name
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }})
}

const createProductsServices = (//change params according to your table columns
    product_name,description,price,discountPercentage,rating,brand,category,images,callback
) =>{//replace product with you table name
    connection.query(` INSERT INTO products (name, description, price, discountPercentage, rating, brand, category, images)
    VALUES ('${product_name}', '${description}', ${price}, ${discountPercentage}, ${rating}, '${brand}', '${category}', '${images}')
  ` ,(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }})
}

const createProductServices = (
    id,//change params according to your table columns
    callback
) =>{
    connection.query(`SELECT * FROM products where id=${id}` ,(err,result)=>{//replace product with you table name
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }})
}


const filterProductsServices = (
    product_name,//change params according to your table columns
    callback
) =>{//replace product with you table name
    connection.query(`SELECT * FROM products WHERE LOWER(name) LIKE LOWER('%${product_name}%');` ,(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }})
}

const deleteProductsServices=(
    id,callback//change params according to your table columns
)=>{//replace product with you table name
    connection.query(`DELETE FROM products WHERE id = ${id};` ,(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }})
}

module.exports={createProductsServices,getProductServices,deleteProductsServices,createProductServices,filterProductsServices}