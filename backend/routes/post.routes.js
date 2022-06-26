const express = require('express');
const { getPosts, createPost, updatePost, deletePost } = require('../controllers/posts.controller');
const { protect } = require('../middleware/authmiddleware');
const router = express.Router();

// router.route('/').get(getPosts).post(createPost);
// router.route('/:id').put(updatePost).delete(deletePost);

router.get('/', protect, getPosts);
router.post('/', protect, createPost);
router.put('/:id', protect, updatePost);
router.delete('/:id', protect, deletePost);


module.exports = router;