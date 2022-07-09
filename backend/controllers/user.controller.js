const asyncHandler = require('express-async-handler');
const User = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// public
const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please enter all fields!')
    }

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error('User already exists!')
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = await User.create({
        ...req.body,
        password: hash,
    });

    if (user) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        throw new Error('Invalid user data!')
    }
});

// public
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) {
        res.status(400)
        throw new Error('Invalid email!')
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
    if (!isPasswordCorrect) {
        res.status(400)
        throw new Error('Invalid Password!')
    }

    res.status(200).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
    })


});

// private
const getMe = asyncHandler(async (req, res) => {
    // const { _id, name, email } = await User.findById(req.user.id)
    res.status(200).json(req.user)
});


// Generate token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT, { expiresIn: '30d' })
}

module.exports = {
    register,
    login,
    getMe
}