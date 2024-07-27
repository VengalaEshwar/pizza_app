const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
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
        },
        quantity :{
          type : Number,
          default : 1,
          require : false
        }
      },
    ],
    totalPice :{
        type : Number,
        require : true
    },
    status :{
        type : String,
        default : 'CANCELLED',
        enum : ['ORDERED','CANCELLED','DEVLIVERED','PROCESSING','OUT_FOR_DELIVERY']
    },
    address :{
        type : String,
        minlength:[10,"minlength should be 10"]
    },
    paymentMethod : {
        type : String,
        enum : ['ONLINE','CASH'],
        default : 'CASH'
    } 
  },{timestamps : true});
  const order = mongoose.model('order',orderSchema);
  module.exports=order;