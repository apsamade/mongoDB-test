const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// ce schema sert a definir la structure de nos document
const courSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mdp: {
        type: String,
        required: true
    }
}, { timestamps: true})
// timestamps est une fonction qui va permettre de horodoter nos document (c'est a dire à jouter a un mecanisme une valeur horaire)

const Cour = mongoose.model('Cour', courSchema)
module.exports = Cour;