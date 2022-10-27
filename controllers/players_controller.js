const express = require('express')
const playerRouter = express.Router()
const PlayerModel = require('../models/player.js')

// index 
playerRouter.get('/', (req, res) => {
    PlayerModel.find()
        .populate('courts')
        .then(foundPlayers => {
            res.send(foundPlayers)
        })
})

// NEW
playerRouter.get('/players', (req, res) => {
    PlayerModel.find()
    .then(foundPlayers => {
        res.render('new', {
            players: foundPlayers
        })
    })
})

// show 
playerRouter.get('/:id', (req, res) => {
    PlayerModel.findById(req.params.id)
        .populate({
            path: 'courts',
            options: { limit: 3 }
        })
        .lean()
        .then(foundPlayer => {
            res.render('playerShow', {
                player: foundPlayer
            })
        })
})

// delete
playerRouter.delete('/:id', (req, res) => {
    PlayerModel.findByIdAndDelete(req.params.id) 
      .then(deletedPlayer => { 
        res.status(303).redirect('/courts')
      })
  })

module.exports = playerRouter