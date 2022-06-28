const express = require('express')
const router = express.Router()

const routes = () => {
   /** import all routes that need authentification */  
   require('./user').user(router)
   return router
}

module.exports = routes()