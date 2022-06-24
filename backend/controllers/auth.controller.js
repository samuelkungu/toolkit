const User = require('../models/user.model')
const bcrypt = require('bcrypt');

async function register(req, res) {

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
        ...req.body,
        password: hash
    });

    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
};

module.exports = {
    register,
}