const mongoose = require('mongoose')
const Joi = require('joi');
const validator = require("validator");
const Schema = mongoose.Schema;

// ce schema sert a definir la structure de nos document
const courSchema = new Schema({
    email: {
        type: String,
        required: [true, "Veuillez entrer votre email"],
        unique: true,
        validate: [validator.isEmail, "Please provide a valid email"],
        lowercase: true,
      },
    name: {
        type: String,
        required: [true, "Veuillez entrer votre nom"],
        trim: true,
      },
    mdp: {
        type: String,
        require: [true, "Veuillez entrer votre mot de passe"],
        trim: true,
    }
}, { timestamps: true})
// timestamps est une fonction qui va permettre de horodoter nos document (c'est a dire à jouter a un mecanisme une valeur horaire)

const Cour = mongoose.model('Cour', courSchema)
module.exports = Cour;