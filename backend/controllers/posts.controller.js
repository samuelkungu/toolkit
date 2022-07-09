<<<<<<< HEAD
const asyncHandler = require('express-async-handler');
const Post = require('../models/post.model');
=======
<<<<<<< HEAD
const asyncHandler = require('express-async-handler');
const Post = require('../models/post.model');

// private
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({ user: req.user.id })
    res.status(200).json(posts)
});


// private
const createPost = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const post = await Post.create({
        text: req.body.text,
        user: req.user.id,
    })
    res.status(200).json(post)
});



// private
const updatePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (!post) {
        res.status(400)
        throw new Error('Post not found!')
    }

    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if (post.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body,
        { new: true }
    )
    res.status(200).json(updatedPost)
});

// private
const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (!post) {
        res.status(400)
        throw new Error('Post not found!')
    }

    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if (post.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await Post.findByIdAndDelete(req.params.id)
    res.status(200).json({ id: req.params.id })
});

=======
const Post = require('../models/post.model')
const errorHandler = require('../middleware/errorMiddleware')
async function createPost(req, res) {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }
};
>>>>>>> 6377e52ac40f42de3dfa23095e181d5ea758c094

// private
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({ user: req.user.id })
    res.status(200).json(posts)
});


// private
const createPost = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const post = await Post.create({
        text: req.body.text,
        user: req.user.id,
    })
    res.status(200).json(post)
});



// private
const updatePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (!post) {
        res.status(400)
        throw new Error('Post not found!')
    }
<<<<<<< HEAD

    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if (post.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body,
        { new: true }
    )
    res.status(200).json(updatedPost)
});

// private
const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (!post) {
        res.status(400)
        throw new Error('Post not found!')
    }

    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if (post.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await Post.findByIdAndDelete(req.params.id)
    res.status(200).json({ id: req.params.id })
});

=======
};
>>>>>>> d416079d90500b6ff2fb6475b82e1649465b8fc3
>>>>>>> 6377e52ac40f42de3dfa23095e181d5ea758c094

module.exports = {
    createPost,
    updatePost,
    deletePost,
<<<<<<< HEAD
    getPosts,
=======
<<<<<<< HEAD
    getPosts,
=======
    getPost,
    getAllPosts
>>>>>>> d416079d90500b6ff2fb6475b82e1649465b8fc3
>>>>>>> 6377e52ac40f42de3dfa23095e181d5ea758c094
}

