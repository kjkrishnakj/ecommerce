const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name : {type :String,required:true},
    heading:{type:String,require:true},
    title: { type: String, required: true },
    decr: { type: String, required: true },
}, { timestamps: true });

mongoose.models = {};
module.exports = mongoose.model("Review", ReviewSchema);
