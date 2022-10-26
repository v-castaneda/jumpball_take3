const express = require('express')
const courtsRouter = express.Router()
const CourtModel = require('../models/court.js')
const PlayerModel = require('../models/player.js')

// INDEX
courtsRouter.get('/', async (req, res) => {
    const foundCourts = await CourtModel.find().lean()
    const foundPlayers = await PlayerModel.find().lean()
    // console.log(foundCourts)
    res.render('index', {
        courts: foundCourts, 
        players: foundPlayers,
        title: 'Index Page'
    })
})

// NEW
courtsRouter.get('/new', (req, res) => {
    PlayerModel.find()
    .then(foundPlayers => {
        res.render('new', {
            players: foundPlayers
        })
    })
})

// SHOW
courtsRouter.get('/:id', (req, res) => {
    CourtModel.findById(req.params.id)
    .populate('player')
    .then(foundCourt => {
        res.render('show', {
            court: foundCourt
        })
    })
    .catch(err => {
        res.send('404')
    })
})

// EDIT
courtsRouter.get('/:id/edit', (req, res) => {
    PlayerModel.find()
    .then(foundPlayers => {
        Court.findById(req.params.id)
        .then(foundCourt => {
            res.render('edit', {
                court: foundCourt,
                players: foundPlayers
            })
        })
    })
})

// UPDATE
courtsRouter.put('/:id', (req, res) => {
  CourtModel.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
    .then(updatedBread => {
      console.log(updatedBread) 
      res.redirect(`/courts/${req.params.id}`) 
    })
})

// CREATE
courtsRouter.post('/', (req, res) => {
  if(!req.body.image) {
      req.body.image = undefined 
  }
  CourtModel.create(req.body)
  res.redirect('/courts')
})

// DELETE
courtsRouter.delete('/:id', (req, res) => {
    CourtModel.findByIdAndDelete(req.params.id)
        .then(deletedCourt => {
            res.status(303).redirect('/courts')
        })
})

module.exports = courtsRouter