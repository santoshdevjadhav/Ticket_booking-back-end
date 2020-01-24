var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var book_schema=new  Schema({
    theatre_name:{
        type:String
    },seats:{
        type:Number,
        default:20
    },date:{
        type:Date
    },movie_name:{
        type:String
    },booked_seats:{
        type:Array,  
    }

},{
    collection:'book',
    timestamps:true
})

module.exports=mongoose.model('book',book_schema);

