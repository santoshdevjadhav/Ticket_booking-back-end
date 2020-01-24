var  express=require('express');
var app=express();
var cors=require('cors')
var mongoose=require('mongoose');
var chalk=require('chalk');
var book=require('./routes/index')
app.use(cors());
app.use(express.json());

app.use("/",book);


mongoose.connect("mongodb://localhost:27017/demo_system1");
mongoose.connection.on("error",function(error){
console.log(chalk.redBright("an error ocuure in connection"),error);
}).once('open',function(args){
    console.log(chalk.greenBright("connection establish sucessfully"))
   
});
app.listen(3000,function(error){
if(error)
    console.log("error in connect to server");
    console.log("server started sucessfully..");

});
