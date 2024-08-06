// const express=require("express");
// const colors=require("colors");
// const dotenv=require("dotenv").config();
// const morgan=require("morgan")

const express=require("express");
const fileURLtoPath=require("url")
const path=require("path")
const app=express()
const PORT=5000;

app.use(express.json());

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
 
// app.get("/", (req,res)=>{
//     res.send("hello world");

// })
app.get("/Home", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","HOME.html"));

})
app.get("/contact", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","CONTACTS.html"));

})
app.get("/product", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","PRODUCT.html"));

})
app.get("/shop", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","SHOP.html"));

})
app.get("/shopping", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","SHOPPING.html"));

})
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})