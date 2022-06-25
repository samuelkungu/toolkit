const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
            ref: 'User',
        },
        text: {
            type: String,
            required: [true, 'Please add a text value'],
        },
    },
    {
        timestamp: true,
    }
);

module.exports = mongoose.model('Post', postSchema);