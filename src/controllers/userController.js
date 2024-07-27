const { createCart } = require('../repositories/cartRepository');
const {registerUser} = require('../services/userServices')
const createUser = async (req,res)=>{
    try {
        console.log("Enter create user ccontroller"); 
        let response =await registerUser(req.body); 
        // let cartResponse = awat createCart()
        console.log("response" + response);
        res.status(201).json({
            success : true,
            message : "successfully created user",
            data : response,
            error : {}
        })
    } catch (error) {
        res.status(error.statusCode?error.statusCode:501).json({
            success : false,
            message : error.reason,
            data : {},
            error : error
        })
    }
}
module.exports={
    createUser
}