const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    descr: { type: String, required: true },
    img: { type: String, required: true },
    battery: { type: Number, required: true },
    ram: { type: Number, required: true },
    memory: { type: Number, required: true },
    priceid: { type: String},
    cpu: { type: String, required: true },
    screensize: { type: Number, required: true },
    color: { type: String },
    price: { type: Number, required: true },
    availableQty: { type: Number, required: true },
}, { timestamps: true });

mongoose.models = {};
module.exports = mongoose.model("Product", ProductSchema);
