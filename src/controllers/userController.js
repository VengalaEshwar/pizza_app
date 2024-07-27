const { createCart } = require('../repositories/cartRepository');
const {registerUser} = require('../services/userServices')
const createUser = async (req,res)=>{
    try {
        let response =await registerUser(req.body);
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