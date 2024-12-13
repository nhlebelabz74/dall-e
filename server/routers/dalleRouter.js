/**
 * Router for handling dall-e related requests
 * @module routers/dalleRouter
 */

// Import the express module
// only used to show the type of the variable when generating documentation
const express = require('express');

// create a new router object
const router = express.Router();

// destruct the generateImageController from the controllers module
const { generateImageController } = require('../controllers');

/**
 * POST route for generating images.
 * Supports the following URLs:
 * - /generate_image
 * @function
 * @param {express.Request} req - The request object.
 * @param {express.Response} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
router.post('/generate_image', generateImageController);

router.post('/image_test', async (req, res) => {
    const { prompt } = req.body;
    console.log(req.body);
    res.status(200).json({ test_url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-XPtyh6w0nNY7uwOGkx2YRyM7/user-iiNY6v6up0e68tHNTyfyaiE0/img-VieiMBEfGuXWN4JBL23skgmR.png?st=2024-12-13T15%3A44%3A22Z&se=2024-12-13T17%3A44%3A22Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-12-13T03%3A12%3A02Z&ske=2024-12-14T03%3A12%3A02Z&sks=b&skv=2024-08-04&sig=Wuw7ejJBqDFziWoKMA4GBVJ8P1qO8pr1edm%2BouW9vkQ%3D", prompt: prompt });
});

// export the router
module.exports = router;