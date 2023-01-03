const  registerController  = require('../controller/registerController.js')
const  express = require('express');
const router = express()

  //Routes
 router.post("/login",registerController.login)
 router.post("/register",registerController.registerUser )

module.exports = router;