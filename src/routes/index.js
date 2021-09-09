const express = require('express'),
    router = express.Router(),
    userRouters = require('./users.routers')

router.use('/users', userRouters)

module.exports = router