const mongoose = require('mongoose');
const ProductController = require("../controllers/product.controller");


module.exports = function(app){
    app.get('/api/product', ProductController.findAllProducts)
    app.post('/api/product/new', ProductController.createNewProduct);
}