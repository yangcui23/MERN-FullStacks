const mongoose = require('mongoose');
const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });
}
module.exports.findOneProducts = (req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });
}
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });
}
module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id , req.body , {new:true})
        .then(product => res.json(product))
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });
}
module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(product => res.json(product))
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });
}



