const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path')
const adminRoutes = require('./routes/admin')
require('dotenv').config();
const PORT = process.env.PORT || 3000


// connect to mongoDB
mongoose.connect(`mongodb+srv://${dbURI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connexion à la base de données réussie !');
    
  }).catch((err) => {
    console.log(`Echec de la connexion : ${err}`);
  });
// si la connexion à la base de donné fonctionne alors on lance le serveru sinon on log l'erreur


// partie app

app.set('view engine', 'hbs')

app.use(express.static(path.dirname('public')))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(adminRoutes)

app.listen(PORT, ()=>{console.log(`écoute sur le port ${PORT}`)})