const cart = require("../schema/cartSchema");

async function createCart(id)
{
    try {
        const user =await  cart.create({
            user : id
        });
        return user;
    } catch (error) {
        console.log(error);
    }
} 
async function getCartUSerById(id)
{
    try {
        const response = await cart.findOne({
            user : id
        })
        return response;
    } catch (error) {
        console.log(error);
    }
}
module.exports={createCart ,getCartUSerById};