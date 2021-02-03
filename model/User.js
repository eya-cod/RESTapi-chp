const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema({
    name:{
        type:String,
        required:true

    },
    age:{
        type:Number,
        required:true

    }
})
module.exports=User=mongoose.model('User',userSchema)