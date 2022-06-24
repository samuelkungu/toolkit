const Post = require('../models/post.model')

async function createPost(req, res) {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }
};

async function updatePost(req, res) {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(500).json(error)
    }
};

async function deletePost(req, res) {
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json('Post deleted successfully')
    } catch (error) {
        res.status(500).json(error)
    }
};

async function getPost(req, res) {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
};

async function getAllPosts(req, res) {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
};

module.exports = {
    createPost,
    updatePost,
    deletePost,
    getPost,
    getAllPosts
}

