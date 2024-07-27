const { createProduct, getProductByIdService ,deleteProductByIdService} = require("../services/productService");

async function addProduct(req,res){
    try {
        const product = await createProduct({ //productService
            productName: req.body.productName,
            description: req.body.description,
            price : req.body.price,
            category : req.body.category,
            inStock: req.body.inStock,
            imagePath: req.file.path
        });
        return res.status(201).json({
            success: true,
            message: 'Successfully created the product',
            error: {},
            data: product
        });
    } catch(error) {
        if(error instanceof AppError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                data: {},
                error: error
            });
        }
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error: error
        });
        
    }

}
async function getProductById(req,res){
try {
    let id = req.params.id;
    let product = await getProductByIdService(id);
    if(!product)
        throw { message : "unable to find user" ,statusCode : 401}
    res.status(201).json({
        message : "succesful",
        success : true,
        data : product,
        error : {}
    })
} catch (error) {
    res.status(error.statusCode).json({
        message : "unsuccesful",
        success : false,
        data : {},
        error : error
    })
}
}
async function deleteProductById(req,res){
    try {
        let id = req.params.id;
        let product = await deleteProductByIdService(id);
        if(!product)
            throw { message : "unable to find user" ,statusCode : 401}
        res.status(201).json({
            message : "succesful;y deleted",
            success : true,
            data : product,
            error : {}
        })
    } catch (error) {
        res.status(error.statusCode).json({
            message : "unsuccesful",
            success : false,
            data : {},
            error : error
        })
    }
    }
module.exports={addProduct,getProductById,deleteProductById};