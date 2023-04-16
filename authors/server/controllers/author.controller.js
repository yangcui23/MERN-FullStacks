
const {Author} = require('../models/author.model');



const findAllAuthor = (req , res) => {
    Author.find({})
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(400).jason(error)
        })

}

const createAuthor = (req, res) => {
    Author.create(req.body)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(400).json(error)
        })
}
const findOneAuthor = (req ,res )=> {
    Author.findById(req.params.id)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(400).json(error)
        })
}
const updateAuthor = (req ,res) => {
    Author.findByIdAndUpdate(req.params.id , req.body , {new : true, runValidators :true })
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

const deleteAuthor = (req ,res) => {
    Author.findByIdAndDelete(req.params.id)
    .then(response => {
        res.json(response);
    })
    .catch(error => {
        res.status(400).json(error)
    })
}

module.exports = {
    findAllAuthor,
    createAuthor,
    findOneAuthor,
    updateAuthor,
    deleteAuthor
}