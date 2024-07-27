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
        }).populate('items.product');
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function clearCart(userId) {
    try {

        const cart = await Cart.findOne({
            user: userId
        });
        if(!cart) {
            throw new NotFoundError("Cart");
        }

        cart.items = [];

        await cart.save();

        return cart;

    } catch (error) {
        throw new InternalServerError();
    }
}
module.exports={createCart ,getCartUSerById,clearCart};