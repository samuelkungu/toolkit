<<<<<<< HEAD
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')

const protect = asyncHandler(async (req, res, next) => {
    let token

=======
const jwt = require('jsonwebtoken');

async function protect(req, res, next) {
    let token
>>>>>>> 6377e52ac40f42de3dfa23095e181d5ea758c094
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1]

            // Verify token
<<<<<<< HEAD
            const decoded = jwt.verify(token, process.env.JWT)

            // Get user from the token
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
=======
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get user from the token
            req.user = await User.findById(decoded.id).select('-password')
            // next()
        } catch (error) {
            console.log(error)
            res.status(401).json('Not authorized')
>>>>>>> 6377e52ac40f42de3dfa23095e181d5ea758c094
        }
    }

    if (!token) {
<<<<<<< HEAD
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

module.exports = { protect }
=======
        res.status(401).json('Not authorized, no token')
    }
}


module.exports = {
    protect,
}
>>>>>>> 6377e52ac40f42de3dfa23095e181d5ea758c094
