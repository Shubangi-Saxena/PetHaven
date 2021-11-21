const express=require("express")
const app= express();
const app1=express();
const mongoose = require("mongoose")
const bodyParser=require("body-parser")
//const router = express.Router();

app1.use(express.urlencoded({extended: true}))

mongoose.connect("mongodb+srv://sss:sss@cluster0.oyqux.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{     
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("successful connection")
}).catch((err)=>console.log(err))

/*const modelSchema={
    name:String,
    comment:String,
    feedback: String,
    area:String,
    star:String, possibleValues: ['1','2','3','4','5'],
}

const model = mongoose.model("model",modelSchema)

app.get("/reviews_mongo1",function(req,res){
    res.sendFile(__dirname+ "/reviews_mongo1.html")
})

app.post("/",function(req,res){
    let newModel=new model({
        name:req.body.name,
        comment:req.body.comment,
        feedback:req.body.feedback,
        area:req.body.area,
        star:req.body.star,
    })
    newModel.save()
    res.redirect('/')
})

app1.get("/",function(req,res){
    res.sendFile(__dirname+ "/draft3.html")
})*/

/////////////////////////////////////////////////////// 

//app1.use(express.urlencoded({extended: true}))
app1.get("/",function(req,res){
    res.sendFile(__dirname+ "/draft3.html")
})

app1.get("/join",function(req,res){
    res.sendFile(__dirname+ "/join.html")
})

app1.get("/found_react",function(req,res){
    res.sendFile(__dirname+ "/found_react.html")
})

app1.get("/awareness",function(req,res){
    res.sendFile(__dirname+ "/awareness.html")
})

app1.get("/qna",function(req,res){
    res.sendFile(__dirname+ "/qna.html")
})

app1.get("/lost_react",function(req,res){
    res.sendFile(__dirname+ "/lost_react.html")
})

app1.get("/reviews_mongo1",function(req,res){
    res.sendFile(__dirname+ "/reviews_mongo1.html")
})

app1.get("/donation_shub",function(req,res){
    res.sendFile(__dirname+ "/donation_shub.html")
})

app1.get("/adoption",function(req,res){
    res.sendFile(__dirname+ "/adoption.html")
})

const modelSchema1={
    name:String,
    email:String,
    number:Number,
    address: String,
    Amount:Number,
    payment: String,
    comment:String,
    feedback: String,
    area:String,
    star:String, possibleValues: ['1','2','3','4','5'],
    animal:String,
    reason: String,
    date:Date,
}

const model1 = mongoose.model("model1",modelSchema1)



app1.post("/",function(req,res){
    let newModel1=new model1({
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        address:req.body.address,
        Amount:req.body.Amount,
        payment:req.body.payment,
        comment:req.body.comment,
        feedback:req.body.feedback,
        area:req.body.area,
        star:req.body.star,
        animal:req.body.animal,
        reason:req.body.reason,
        date:req.body.date,
    })
    newModel1.save()
    res.redirect('/')
})

//app1.use('/', app)

app1.listen(3000,function(){
    console.log("server is running on 3000");
})

