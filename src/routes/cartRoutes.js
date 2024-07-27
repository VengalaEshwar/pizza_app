const express = require('express');
const {getCartById} = require('../controllers/cartController');
const { isLoggedIn } = require('../validations/authValidator');

const cartRouter = express.Router();
cartRouter.get('/',isLoggedIn,getCartById);
module.exports=cartRouter;