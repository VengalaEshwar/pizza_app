const { Schema, model } = require("mongoose");

const productSchema = Schema({
    productName : {
        type : String,
        required : [true,"The product is requierd"],
        trim : true
    },
    description : {
        type : String,
        required : [false],
        trim : true
    },
    price : {
        type : String,
        required : [true,"Product price is required"]
    },
    category : {
        type : String,
        enum : ['veg','non-veg','drinks','sides'],
        default : 'veg'
    },
    quantity: {
        type: Number,
        required: true,
        default: 10
    },
    productImage : {
        type  : String,
        required : [false]
    },
    inStock :{
        type : Boolean,
        default : true,
        required :[true,"instock is required"]
    }
},{timestamps : true})
const Product = model("product",productSchema);
module.exports=Product;