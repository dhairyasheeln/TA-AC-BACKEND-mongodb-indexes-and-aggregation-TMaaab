var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema=new Schema({
    name:{type:String},
    username:{type:String,unique:true},
    email:{type:String,unique:true},
    address:{
        city:String,
        state:{type:String,unique:true},
        country:String,
        pin:Number
    }
});

userSchema.index({'address.country':1,'address.state':1});

var User=mongoose.model('User',userSchema);
module.exports=User;