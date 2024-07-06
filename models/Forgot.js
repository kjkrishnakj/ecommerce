const mongoose = require('mongoose')

const ForgotSchema  = new mongoose.Schema({
    userid : {type :String,required:true},
    email : {type :String,required:true,unique:true}, 
    ftoken : {type :String,required:true},
  

},{timestamps: true});

export default mongoose.models.User|| mongoose.model("User",ForgotSchema)