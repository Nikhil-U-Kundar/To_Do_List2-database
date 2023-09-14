const express =require("express")
const mongoose =require("mongoose")
//onst https =require("https")
const body =require("body-parser")
const app=express()
app.set('view engine', 'ejs');
app.use(body.urlencoded({extended:true}))
 app.use(express.static("public"))//direct go and search the publc folder
mongoose.connect(" mongodb+srv:mongodb+srv://nikhilukundar:9945994323@cluster0.bzxf1yq.mongodb.net/tododb ",{useNewUrlParser:true})
// to create schema
const todoschema=new mongoose.Schema({task:String})
////model is created
const todomodel=mongoose.model("tasks",todoschema)
//
//const t1=new todomodel({task:"Gaming"})
//
//const t2=new todomodel({task:"Studying"})
//
//const t3=new todomodel({task:"Playing"})
//t1.save()
//t2.save()
//t3.save()


app.get("/",function(req,res){

    todomodel.find().then((result) => {
        res.render('index',{tasks:result})
    }).catch((err) => {
       console.log(err)
    });
    
  
})

app.post("/",function(req,res){
var todotask= req.body.task
//console.log(task)
//lists.push(task)


const task=new todomodel({task:todotask})
task.save()
res.redirect("/")
})

app.post("/delete",function(req,res){
    var item=req.body.checkbox
    //console.log(item)
    todomodel.deleteOne({_id:item}).then((result) => {
        res.redirect("/")
    }).catch((err) => {
        console.log(err)
    });
    
})





//app.listen(3000,function(){
    app.listen(process.env.PORT ||3000,function(){
    console.log("server is up and running")
})