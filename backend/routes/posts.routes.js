const express = require('express');
const router = express.Router();
const { getPost, updatePost, deletePost, getAllPosts, createPost } = require('../controllers/posts.controller');


router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.get('/:id', getPost);
router.get('/', getAllPosts);



module.exports = router