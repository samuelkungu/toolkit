const User = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function register(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) return res.status(400).json({ message: "Please enter all fields!" })

    const userExists = await User.findOne({ email })
    if (userExists) return res.status(400).json({ message: "User already exists!" })

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({ ...req.body, password: hash });

    try {
        const savedUser = await newUser.save()
        const token = jwt.sign({ id: savedUser._id, email: savedUser.email }, process.env.JWT, { expiresIn: '30d' });

        res.status(200).json({ savedUser, token })
    } catch (error) {
        res.status(500).json(error)
    }
};

async function login(req, res) {

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ message: "Invalid email!" })

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) res.status(400).json({ message: "Invalid Password!" })

        const token = jwt.sign({ id: user._id }, process.env.JWT, { expiresIn: '30d' });

        const { password, ...otherDetails } = user._doc;

        res.status(200).json({ ...otherDetails, token })
    } catch (error) {
        res.status(500).json(error)
    }
};

async function getMe(req, res) {
    res.json({ message: 'user data display' })
}

// Generate token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT, { expiresIn: '30d' })
}

module.exports = {
    register,
    login,
    getMe,
}