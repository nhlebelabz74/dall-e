const OpenAI = require('openai');
require('dotenv').config();

const { asyncWrapper } = require('../middleware');

const generateImageController = asyncWrapper(async (req, res) => {
    try {
        const openai = new OpenAI();
        const { prompt } = req.body;

        const response = await openai.images.generate({
            model: 'dall-e-2',
            prompt: prompt,
            n: 1
        });
        const image_url = response.data[0].url;
        
        res.status(201).json({ image_url: image_url });
    }
    catch(err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});

module.exports = generateImageController;