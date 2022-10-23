const express = require('express')
const player = express.Router()
const Player = require('../models/player.js')
const playerSeedData = require('../models/player_seed.js')

// index 
player.get('/', (req, res) => {
    Player.find()
        .populate('courts')
        .then(foundPlayers => {
            res.send(foundPlayers)
        })
})

// show 
player.get('/:id', (req, res) => {
    Player.findById(req.params.id)
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
player.delete('/:id', (req, res) => {
    Player.findByIdAndDelete(req.params.id) 
      .then(deletedPlayer => { 
        res.status(303).redirect('/courts')
      })
  })

player.get('/data/seed', (req, res) => {
    Player.insertMany(playerSeedData)
        .then(res.redirect('/stats'))
})

module.exports = player