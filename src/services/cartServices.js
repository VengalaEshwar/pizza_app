const { getCartUSerById } = require("../repositories/cartRepository");

async  function getCartByUserId(id){
    try {
        const cart = await getCartUSerById(id);
        if(!cart)
            throw { statusCode : 501 ,message : "Internal Server error"}
        return cart;
    } catch (error) {
     console.log(error);   
    }
}
module.exports={getCartByUserId};