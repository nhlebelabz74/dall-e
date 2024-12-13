const { getPosts, createPost, deletePosts } = require('./postsController');
const generateImageController = require('./generateImageController');

module.exports = {
    getPosts,
    createPost,
    deletePosts,
    generateImageController
};