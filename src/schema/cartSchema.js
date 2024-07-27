const mongoose = require("mongoose");
const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "user",
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "product",
        unique : true
      },
      quantity :{
        type : Number,
        default : 1,
        require : false
      }
    },
  ],
},{timestamps : true});

const cart = mongoose.model('cart',cartSchema);
module.exports=cart;
