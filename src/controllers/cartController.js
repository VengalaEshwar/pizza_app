const { getCartByUserId } = require("../services/cartServices");

async function getCartById(req,res){
    try {
        console.log(req.user.id);
        let response = await getCartByUserId(req.user.id);
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

module.exports={getCartById};