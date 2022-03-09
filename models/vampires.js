const mongoose = require('mongoose')

const Schema = mongoose.Schema

const model = mongoose.model

const vampireSchema = new Schema(
    {
        name: { type: String, required: true },
        hair_color: { type: String, default: 'blonde' },
        eye_color: String, 
        dob: { Date },
        loves: [String, String],
        location: String, 
        gender: String, 
        victims: { Number, min: 0 }
    }
)

const Vampire = model('Vampire', vampireSchema)

module.exports = Vampire