
const ProductController = require("../controllers/product.controller");


module.exports = function(app){
    app.get('/api/product', ProductController.findAllProducts),
    app.get('/api/product/:id', ProductController.findOneProducts),
    app.post('/api/product/new', ProductController.createNewProduct),
    app.put('/api/product/:id', ProductController.updateProduct),
    app.delete('/api/product/:id', ProductController.deleteProduct)
}



