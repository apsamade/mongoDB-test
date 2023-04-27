const mongoose = require('mongoose')
const validator = require("validator");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

// ce schema sert a definir la structure de nos document
const userSchema = new mongoose.Schema({
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
      validate: {
        validator: function(v) {
          return /^.{6,}$/.test(v);
        },
        message: "Le nom doit contenir au moins 6 caractères"
      }
    },
    mdp: {
      type: String,
      require: [true, "Veuillez entrer votre mot de passe"],
      trim: true,
      validate: {
        validator: function(v) {
          return /^(?=.*\d).{6,}$/.test(v);
        },
        message: "Le mot de passe doit contenir au moins 6 caractères dont au moins 1 chiffre"
      }
    }
  }, { timestamps: true });
  
// timestamps est une fonction qui va permettre de horodoter nos document (c'est a dire à jouter a un mecanisme une valeur horaire)
userSchema.pre('save', async function(next) {
  const user = this;
  if (!user.isModified('mdp')) return next();
  const hash = await bcrypt.hash(user.mdp, 10);
  user.mdp = hash;
  next();
});
const User = mongoose.model('Cour', userSchema)
module.exports = User;