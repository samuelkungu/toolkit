const User = require('../models/user.model')

async function updateUser(req, res) {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
};

async function deleteUser(req, res) {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User deleted successfully')
    } catch (error) {
        res.status(500).json(error)
    }
};

async function getUser(req, res, next) {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
};

async function getUsers(req, res) {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
};

module.exports = {
    updateUser,
    deleteUser,
    getUser,
    getUsers
}