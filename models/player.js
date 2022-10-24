// dependencies
const mongoose = require('mongoose')
const Courts = require('./court')
const { Schema } = mongoose

// schema
const playerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Jesse', 'Joseph', 'Victor']
    }, 
    gameDays: {
        type: Date,
        required: true
    },
    bio: String
}, { toJSON: { virtuals: true }})

// virtuals 
playerSchema.virtual('courts', {
    ref: 'Court',
    localField: '_id',
    foreignField: 'player'
})

// hooks 
playerSchema.post('findOneAndDelete', function() {
    Courts.deleteMany({ player: this._conditions._id })
        .then(deleteStatus => {
            console.log(deleteStatus)
        })
})

// model and export
const Player = mongoose.model('Player', playerSchema)
module.exports = Player