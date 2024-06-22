const BlogService = require('../service/BlogService');
const middleware = require('../middleware/ValidationMiddleware');

const express = require('express');

const router = express.Router();

// create a new blog
router.post('/create', middleware.checkAuthorization, async (req, res) => {
    try {
        const blog = await BlogService.createNewBlog(req.body);
        res.status(201).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// get all blogs
router.get('/all', async (req, res) => {
    try {
        const blogs = await BlogService.getAllBlogs();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

);

// get blog by id
router.get('/blog/:id', async (req, res) => {
    try {
        const blog = await BlogService.getBlogById(req.params.id);
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// update blog
router.put('/update/:id', middleware.checkAuthorization, async (req, res) => {
    try {
        const blog = await BlogService.updateBlog(req.params.id, req.body);
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// delete blog
router.delete('/delete/:id', middleware.checkAuthorization, async (req, res) => {
    try {
        const message = await BlogService.deleteBlog(req.params.id);
        res.status(200).json({ message });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//get blog by user
router.get('/user/blogs/:id', async (req, res) => {
    try {
        const blogs = await BlogService.getBlogsByUserId(req.params.id);
        res.status(200).json(blogs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get published blogs by user
router.get('/user/published/blogs/:id', async (req, res) => {
    try {
        const blogs = await BlogService.getPublishedBlogsByUserId(req.params.id);
        res.status(200).json(blogs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// publish blog
router.put('/publish/:id', middleware.checkAuthorization, async (req, res) => {
    try {
        const blog = await BlogService.publishBlog(req.params.id);
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// unpublish blog
router.put('/unpublish/:id', middleware.checkAuthorization, async (req, res) => {
    try {
        const blog = await BlogService.unpublishBlog(req.params.id);
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;