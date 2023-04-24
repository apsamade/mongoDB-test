const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path')
const adminRoutes = require('./routes/admin')
require('dotenv').config();
const app = express();
const PORT = process.env.PORT

// connect to mongoDB
const dbURI = process.env.dbURI
// mongodb+srv:// est le protocole utilisé pour se connecter à MongoDB en utilisant le service DNS (Domain Name System).

// cours-test est le nom d'utilisateur utilisé pour se connecter à la base de données.

// 7dtfj2xgKJXFLd1E est le mot de passe utilisé pour se connecter à la base de données.

// bouderga.el84tpe.mongodb.net est l'URL de la base de données à laquelle vous voulez vous connecter.

// test_mongo est le nom de la base de données à laquelle vous voulez vous connecter.

// retryWrites=true indique que les opérations d'écriture seront automatiquement réessayées en cas d'échec.

// w=majority indique que les opérations d'écriture doivent être confirmées par une majorité de nœuds pour être considérées comme réussies.
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connexion à la base de données réussie !');
    app.listen(PORT, ()=>{console.log(`écoute sur le port ${PORT}`)})
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
