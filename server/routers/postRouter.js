/**
 * Router for handling post related requests
 * @module routers/postRouter
 */

// Import the express module
// only used to show the type of the variable when generating documentation
const express = require('express');

// create a new router object
const router = express.Router();

// destruct the createPostController from the controllers module
const { getPosts, createPost, deletePosts } = require('../controllers');

/**
 * POST route for creating a post.
 * Supports the following URLs:
 * - /post
 * - /create_post
 * @function
 * @param {express.Request} req - The request object.
 * @param {express.Response} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
router.post(['/post', '/create_post'], createPost);

/**
 * GET route for getting all posts.
 * Supports the following URLs:
 * - /get_posts
 * @function
 * @param {express.Request} req - The request object.
 * @param {express.Response} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
router.get('/get_posts', getPosts);

//for testing purposes
router.delete('/flush', deletePosts);

// export the router
module.exports = router;