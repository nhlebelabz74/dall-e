/**
 * @module models/post.model
 */

// import the mongoose module
const mongoose = require('mongoose');

/**
 * @description Create a new Mongoose schema for the Post collection
 * @type {mongoose.Schema}
 * @property {String} name - The name of the user that created the post
 * @property {String} prompt - The prompt for the post
 * @property {String} image - The image URL for the post
 */
const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    prompt: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Export the Post model as a module
module.exports = mongoose.model('Post', postSchema);