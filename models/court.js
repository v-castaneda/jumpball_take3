// require mongoose
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor
const { Schema } = mongoose

// schema
const courtSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true},
    city: { type: String, required: true}, 
    image: { type: String, required: false}, 
    player: {
        type: Schema.Types.ObjectID,
        ref: 'Player'
    }
})

// helper methods 
courtSchema.methods.getBlessedBy = function(){
  return `${this.player.name} plays with style at ${this.name}.`
}

// model and export
const Court = mongoose.model('Court', courtSchema)
module.exports = Court