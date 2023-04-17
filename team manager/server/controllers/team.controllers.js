const { response } = require('express');
const {Player} = require('../models/team.model');


const findAllPlayers = (req, res) => {
    Player.find({})
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

const createPlayer = (req ,res) => {
    Player.create(req.body)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

const deletePlayer = (req, res) => {
    Player.findByIdAndDelete(req.params.id)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(400).json(error)
        })
}


module.exports = {
    findAllPlayers,
    createPlayer,
    deletePlayer,
}