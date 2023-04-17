const express = require('express');

const { findAllPlayers, createPlayer, deletePlayer } = require("../controllers/team.controllers");

const router = express.Router();



router.get('/',findAllPlayers);
router.post('/new',createPlayer);
router.delete('/:id' , deletePlayer);


module.exports = { playerRouter : router };