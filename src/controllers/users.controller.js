const User = require('../models/User')
const UsersService = require('../services/users.service')

class UserController {
    async getUsers(req, res) {
        const users = await UsersService.getAllUsers()

        res.send(users)
    }

    async createUser(req, res) {
        const user = await UsersService.createNewUser(req.body)

        res.send(user)
    }

    async editUser(req, res) {
        const user = await UsersService.updateUser(req.body)

        res.send(user)
    }

    async deleteUser(req, res) {
        const removedUser = await UsersService.removeUser(req.params.id)

        res.send(removedUser)
    }
}

module.exports = new UserController()