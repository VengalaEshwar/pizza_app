const express = require('express');
const {getCartById, modifyProductTocart, clearCartbyId} = require('../controllers/cartController');
const { isLoggedIn } = require('../validations/authValidator');

const cartRouter = express.Router();
cartRouter.get('/',isLoggedIn,getCartById);

cartRouter.post('/:operation/:productId', isLoggedIn, modifyProductTocart);

cartRouter.delete('/products', isLoggedIn, clearCartbyId);
module.exports=cartRouter;