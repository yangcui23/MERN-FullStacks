const express = require('express');

const {createAuthor, findAllAuthor, findOneAuthor, updateAuthor, deleteAuthor} = require("../controllers/author.controller");

const router = express.Router();



router.get('/',findAllAuthor);
router.get('/:id',findOneAuthor);
router.post('/new',createAuthor);
router.put('/:id',updateAuthor);
router.delete('/:id',deleteAuthor);

module.exports = { authorRouter : router };