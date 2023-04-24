const { get } = require('mongoose');
const Cour = require('../models/cour')
/////////////////////////////////// inscription 
exports.getTest = (req, res, next)=>{
    res.render('test')
}
exports.postTest = (req, res, next)=>{

    const {email, name, mdp} = req.body;

    console.log('email : ' + email )    
    console.log('nom : ' + name )
    console.log('mdp : ' + mdp )
    const cour = new Cour({
        email:  email,
        name:   name,
        mdp:    mdp
    });

    cour.save()
        .then((result) => {
            id = result.id
            res.redirect(`/user/${id}`)
        })
        .catch((err) =>{
            console.log(err)
        })
    
}
/////////////////////////////////// user 
exports.getUser = (req, res, next)=>{
    const userId = req.params.id;
    Cour.findById(userId)
        .then((result) => {
            console.log(result)
            res.render('user', {result: result})
        })
        .catch((err) => {
            console.log(err)
        })
}
exports.postUser = (req, res, next)=>{

}
/////////////////////////////////// connexion
exports.getTestCo = (req, res, next)=>{
    res.render('testCo')
}
exports.postTestCo = (req, res, next)=>{
    const {email, mdp} = req.body;

    console.log('email : ' + email )    
    console.log('mdp : ' + mdp )

    Cour.find()
        .then((result) => {             
                for(let i = 0; i<result.length; i++){
                    console.log(i)
                    if(email === result[i].email && mdp === result[i].mdp){
                        res.redirect(`/user/${result[i].id}`) 
                        break; 
                    }else if ((email != result[i].email || mdp != result[i].mdp) && i+1 == result.length){
                        res.send('erreur au moment de la connexion <br> ton mot de passe ou ton email est erroner <a href="/">revenir au menu d\'inscription</a> ou <a href="/connexion">revenir au menu de connexion</a>')
                    }
                    
                }
            
        })
        .catch((err) =>{
            console.log(err)
        })
    
}