const express = require('express');
const { getPosts, createPost, updatePost, deletePost } = require('../controllers/posts.controller');
const router = express.Router();

// router.route('/').get(getPosts).post(createPost);
// router.route('/:id').put(updatePost).delete(deletePost);

router.get('/', getPosts);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);


module.exports = router;