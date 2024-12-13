const { v2: cloudinary } = require('cloudinary');
const { Post } = require('../models');
const { asyncWrapper } = require('../middleware');
require('dotenv').config();

const axios = require('axios');

const createPost = asyncWrapper(async (req, res) => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });

        const { name, prompt, photo } = req.body;

        const image = await axios({
            url: photo,
            responseType: 'arraybuffer'
        });
        const uploadResult = await cloudinary.uploader.upload(
            `data:image/jpeg;base64,${Buffer.from(image.data).toString('base64')}`
        );

        await Post.create({
            name: name,
            prompt: prompt,
            image: uploadResult.secure_url
        });

        res.status(201).json({ message: 'Post created' });
    }
    catch(err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});

const getPosts = asyncWrapper(async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.status(201).json({ posts: posts });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

const deletePosts = asyncWrapper(async (req, res) => {
    try {
        await Post.deleteMany();
        res.status(201).json({ message: 'Posts deleted' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = {
    createPost,
    getPosts,
    deletePosts
};