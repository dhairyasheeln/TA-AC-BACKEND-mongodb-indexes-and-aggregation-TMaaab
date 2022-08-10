var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var articleSchema=new Schema({
    title:{type:String},
    description:{type:String},
    tags:[{type:String}]
});

articleSchema.index({tags:1},{title:"text"},{description:"text"});