const order = require("../schema/orderSchema");
async function createOrderRepo(id)
{
    try {
        let orderRes = await order.create({
            user : id
        })
    } catch (error) {
        
    }
}
module.exports={createOrderRepo};