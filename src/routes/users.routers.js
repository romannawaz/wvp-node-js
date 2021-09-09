const express = require('express'),
    router = express.Router(),
    UsersController = require('../controllers/users.controller')

router
    .get('/', UsersController.getUsers)
    .post('/', UsersController.createUser)
    .put('/', UsersController.editUser)
    .delete('/:id', UsersController.deleteUser)

module.exports = router
