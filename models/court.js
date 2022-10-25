// require mongoose
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor
const { Schema } = mongoose

// schema
const courtSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true},
    city: { type: String, required: true},
    player: {
        type: Schema.Types.ObjectID,
        ref: 'Player'
    }
})

// model and export
const Court = mongoose.model('Court', courtSchema)
module.exports = Court