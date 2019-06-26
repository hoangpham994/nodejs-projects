const express = require('express');
const BlogController  = require('../controllers/blogpost.controller');

module.exports = app => {
    const apiRouters = express.Router();
    const blogPostRouters = express.Router();

    apiRouters.use('/blogPosts', blogPostRouters);

    blogPostRouters.post('/', BlogController.publishPost);

    app.use('/api', apiRouters);
};