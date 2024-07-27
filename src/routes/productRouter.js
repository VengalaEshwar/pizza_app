const express = require('express');
const uploader = require('../middlewares/multerMiddleware');
const { addProduct,getProductById ,deleteProductById} = require('../controllers/productController');
const { isLoggedIn, isAdmin } = require('../validations/authValidator');
const productRouter = express.Router();
productRouter.post("/",
    isLoggedIn,
    isAdmin,
    uploader.single('productImage'),
    addProduct
);
productRouter.get("/:id",getProductById);
productRouter.delete("/:id",deleteProductById);
module.exports=productRouter;