/**
 * The index.js file is used to import all the models and export them as modules.
 * This way, we can import all the models from a single file.
 */

// import the models
const Post = require('./post.model');

// export the models as modules
module.exports = {
    Post
};