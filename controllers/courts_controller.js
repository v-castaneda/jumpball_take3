const express = require('express')
const courts = express.Router()
const Court = require('../models/court.js')
const Player = require('../models/player.js')

// INDEX
courts.get('/', async (req, res) => {
    const foundPlayers = await Player.find().lean()
    const foundCourts = await Court.find().lean()
    console.log(foundCourts)
    res.render('index', {
        courts: foundCourts, 
        players: foundPlayers,
        title: 'Index Page'
    })
})

// NEW
courts.get('/new', (req, res) => {
    Player.find()
    .then(foundPlayers => {
        res.render('new', {
            players: foundPlayers
        })
    })
})

// SHOW
courts.get('/:id', (req, res) => {
    Court.findById(req.params.id)
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
courts.get('/:id/edit', (req, res) => {
    Player.find()
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
courts.put('/:id', (req, res) => {
//   if(req.body.hasGluten === 'on'){
//     req.body.hasGluten = true
//   } else {
//     req.body.hasGluten = false
//   }
  Court.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
    .then(updatedBread => {
      console.log(updatedBread) 
      res.redirect(`/courts/${req.params.id}`) 
    })
})

// CREATE
courts.post('/', (req, res) => {
  if(!req.body.image) {
      req.body.image = undefined 
  }
//   if(req.body.hasGluten === 'on') {
//     req.body.hasGluten = true
//   } else {
//     req.body.hasGluten = false
//   }
  Court.create(req.body)
  res.redirect('/courts')
})

// DELETE
courts.delete('/:id', (req, res) => {
    Court.findByIdAndDelete(req.params.id)
        .then(deletedCourt => {
            res.status(303).redirect('/courts')
        })
})

module.exports = courts