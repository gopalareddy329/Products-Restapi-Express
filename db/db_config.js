const mysql =require("mysql2");
const connection=mysql.createConnection({
    host:'127.0.0.1',
    user:'',
    password:'',//config your credentials
    port:"",
    database:"",

});

connection.connect((err)=>{
    if(err){
        console.log("Error");
    }
    else{
        console.log("connected");
    }
});

module.exports = {connection};