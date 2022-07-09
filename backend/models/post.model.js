const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    text: {
        type: String,
    },
},
    {
        timestamps: true
    }
);

<<<<<<< HEAD
module.exports = mongoose.model('Post', postSchema)
=======
module.exports = mongoose.model('Post', postSchema)
>>>>>>> 6377e52ac40f42de3dfa23095e181d5ea758c094
