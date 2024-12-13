/**
 * Router for handling post related requests
 * @type {Router}
 */
const postRouter = require('./postRouter');

/**
 * Router for handling dall-e related requests
 * @type {Router}
 */
const dalleRouter = require('./dalleRouter');

// export the routers
module.exports = {
    postRouter,
    dalleRouter
};