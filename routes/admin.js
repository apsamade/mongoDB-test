const express = require('express')
const Cour = require('../models/cour')

const router = express.Router();
const adminController = require('../controller/admin')


router.get('/', adminController.getTest)
router.post('/', adminController.postTest)



router.get('/user/:id([a-zA-Z0-9]+)', adminController.getUser)
router.post('/user/:id([a-zA-Z0-9]+)', adminController.postUser)

router.get('/connexion', adminController.getTestCo)
router.post('/connexion', adminController.postTestCo)


module.exports = router;