const User = require('../models/User')

class UsersService {

    async getAllUsers() {
        const users = await User.find({})

        return users
    }

    async createNewUser(reqBody) {
        const newUser = new User({
            first_name: reqBody.first_name,
            last_name: reqBody.last_name,
            _id: reqBody._id
        })

        return await newUser.save()
    }

    async updateUser(reqBody) {
        const newUser = {
            first_name: reqBody.first_name,
            last_name: reqBody.last_name,
            _id: reqBody._id
        }

        return await User.findByIdAndUpdate(reqBody._id, newUser, { new: true })
    }

    async removeUser(_id) {
        return await User.findByIdAndRemove(_id)
    }

}

module.exports = new UsersService()