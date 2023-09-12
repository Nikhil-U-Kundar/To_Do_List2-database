const express =require("express")
//onst https =require("https")
const body =require("body-parser")
const app=express()
app.set('view engine', 'ejs');
app.use(body.urlencoded({extended:true}))
 app.use(express.static("public"))//direct go and search the publc folder
var lists=[]

app.get("/",function(req,res){
    res.render('index',{tasks:lists})
})

app.post("/",function(req,res){
var task= req.body.task
//console.log(task)
lists.push(task)
res.redirect("/")
})

//app.listen(3000,function(){
    app.listen(process.env.PORT ||3000,function(){
    console.log("server is up and running")
})