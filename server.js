// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// COURT ROUTES
const courtsController = require('./controllers/courts_controller.js')
app.use('/courts', courtsController)

// PLAYERS
const playersController = require('./controllers/players_controller.js')
app.use('/players', playersController)

// 404 Page
app.get('*', (req, res) => {
  res.send('404 - see server.js')
})

// LISTEN
app.listen(PORT, () => {
  console.log('balling at port', PORT);
})
