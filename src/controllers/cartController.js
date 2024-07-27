const { getCartByUserId, modifyCart, clearProductsFromCart } = require("../services/cartServices");
const AppError = require("../utils/appError");
async function getCartById(req,res){
    try {
        console.log("In the controller");
        console.log(req.user.id);
        let response = await getCartByUserId(req.user.id);
        console.log("In the controller",response);
        return res.status(201).json({
        message : "Succesfully got cart",
        data : response,
        error : {},
        statusCode : 201
    });
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            message : "unSuccesfully  cart",
            data : {},
            error : error,
            statusCode : 501
        });
    }
}
async function modifyProductTocart(req, res) {
    try {
         const cart = await modifyCart(req.user.id, req.params.productId, req.params.operation == "add");
         return res.status(200).json({
             success: true,
             message: "Successfully added product to the cart",
             error: {},
             data: cart
         })
    } catch(error) {
         console.log(error);
         if(error instanceof AppError) {
             return res.status(error.statusCode).json({
                 success: false,
                 message: error.message,
                 error: error,
                 data: {}
             })
         }
         return res.status(500).json({
             success: false,
             message: "Something went wrong",
             error: error,
             data: {}
         })
    }
 }

 async function clearCartbyId(req, res) {
    try {
        const cart = await clearProductsFromCart(req.user.id);
        return res.status(200).json({
            success: true,
            message: "Successfully cleared all products from the cart",
            error: {},
            data: cart
        })
   } catch(error) {
        console.log(error);
        if(error instanceof AppError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                error: error,
                data: {}
            })
        }
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error,
            data: {}
        })
   }
 }

module.exports={getCartById,
    clearCartbyId,
    modifyProductTocart};