const  registerController  = require('../controller/registerController.js')
const  express = require('express');
const router = express()

  //Routes
 router.post("/register",registerController.registerUser )

module.exports = router;