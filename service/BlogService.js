const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Blog = require('../db/Blog');
const logger = require('../utils/logger');

const SECRET_KEY = "your-secret-key"; // Replace with your own secret key

// Blog service class
class BlogService {

    // Function to create a new blog
    static async createNewBlog(blogData) {
        try {
            logger.info('Creating new blog');
            logger.debug('Creating new blog:', blogData);
            // Create a new blog in the database
            // get count of all blogs
            const blogCount = await Blog.countDocuments();
            const newBlog = {
                title: blogData.title,
                content: blogData.content,
                isPublished: blogData.isPublished,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                id: blogCount + 1,
                userId: blogData.userId,
            };

            // Save the new blog in the database
            const blog = await Blog.create(newBlog);

            logger.info('New blog created');
            logger.debug('New blog created:', blog);
            // Return the newly created blog
            return blog;
        } catch (error) {
            // Handle error
            logger.error('Error creating new blog:', error);
            throw error;
        }
    }

    // Function to update an existing blog
    static async updateBlog(blogId, blogData) {
        try {
            logger.info('Updating blog');
            logger.debug('Updating blog:', blogData);
            // Find the blog by ID
            const blog = await Blog.findOne({ id: blogId});

            // Check if the blog exists
            if (!blog) {
                throw new Error('Blog not found');
            }

            // Update the blog details
            blog.title = blogData.title;
            blog.content = blogData.content;
            blog.updatedAt = new Date().toISOString();

            // Save the updated blog in the database
            const updatedBlog = await blog.save();

            logger.info('Blog updated');
            logger.debug('Blog updated:', updatedBlog);
            // Return the updated blog
            return updatedBlog;
        } catch (error) {
            // Handle error
            logger.error('Error updating blog:', error);
            throw error;
        }
    }

    // Function to delete an existing blog
    static async deleteBlog(blogId) {
        try {
            logger.info('Deleting blog');
            // Find the blog by ID
            const blog = await Blog.findOne({ id: blogId});

            // Check if the blog exists
            if (!blog) {
                throw new Error('Blog not found');
            }

            // Delete the blog from the database
            await blog.deleteOne();

            logger.info('Blog deleted');
            // Return success message
            return {success: true, message: 'Blog deleted successfully'};
        }
        catch (error) {
            // Handle error
            logger.error('Error deleting blog:', error);
            throw error;
        }
    }

    // Function to get all blogs
    static async getAllBlogs() {
        try {
            logger.info('Retrieving all blogs');
            // Retrieve all blogs from the database
            const blogs = await Blog.find({ isPublished: true});

            logger.info('All blogs retrieved');
            // Return the list of blogs
            return blogs;
        } catch (error) {
            // Handle error
            logger.error('Error retrieving all blogs:', error);
            throw error;
        }
    }

    // Function to get a blog by ID
    static async getBlogById(blogId) {
        try {
            logger.info('Retrieving blog by ID');
            // Find the blog by ID
            const blog = await Blog.findOne({ id: blogId});

            // Check if the blog exists
            if (!blog) {
                throw new Error('Blog not found');
            }

            logger.info('Blog retrieved by ID');
            // Return the blog
            return blog;
        }
        catch (error) {
            // Handle error
            logger.error('Error retrieving blog by ID:', error);
            throw error;
        }

    }

    // Function to get all blogs by a userId
    static async getBlogsByUserId(userId) {
        try {
            logger.info('Retrieving blogs by userId');
            // Find all blogs by userId
            const blogs = await Blog.find({ userId: userId });

            logger.info('Blogs retrieved by userId');
            // Return the list of blogs
            return blogs;
        } catch (error) {
            // Handle error
            logger.error('Error retrieving blogs by userId:', error);
            console.error('Error retrieving blogs by userId:', error);
            throw error;
        }
    }

    // Function to publish a blog
    static async publishBlog(blogId) {
        try {
            logger.info('Publishing blog');
            // Find the blog by ID
            const blog = await Blog.findOne({ id: blogId});

            // Check if the blog exists
            if (!blog) {
                throw new Error('Blog not found');
            }

            // Publish the blog
            blog.isPublished = true;
            blog.updatedAt = new Date().toISOString();

            // Save the updated blog in the database
            const updatedBlog = await blog.save();

            logger.info('Blog published');
            logger.debug('Blog published:', updatedBlog);
            // Return the updated blog
            return updatedBlog;
        }
        catch (error) {
            // Handle error
            logger.error('Error publishing blog:', error);
            console.error('Error publishing blog:', error);
            throw error;
        }
    }

    // Function to unpublish a blog
    static async unpublishBlog(blogId) {
        try {
            logger.info('Unpublishing blog');
            // Find the blog by ID
            const blog = await Blog.findOne({ id: blogId});

            // Check if the blog exists
            if (!blog) {
                throw new Error('Blog not found');
            }

            // Unpublish the blog
            blog.isPublished = false;
            blog.updatedAt = new Date().toISOString();

            // Save the updated blog in the database
            const updatedBlog = await blog.save();

            logger.info('Blog unpublished');
            logger.debug('Blog unpublished:', updatedBlog);
            // Return the updated blog
            return updatedBlog;

        }
        catch (error) {
            // Handle error
            logger.error('Error unpublishing blog:', error);
            console.error('Error unpublishing blog:', error);
            throw error;
        }
    }

    // Function to get all published blogs
    static async getPublishedBlogs() {
        try {
            logger.info('Retrieving published blogs');
            // Find all published blogs
            const blogs = await Blog.find({ isPublished: true});

            logger.info('Published blogs retrieved');
            // Return the list of published blogs
            return blogs;
        } catch (error) {
            // Handle error
            logger.error('Error retrieving published blogs:', error);
            console.error('Error retrieving published blogs:', error);
            throw error;
        }
    }

}

module.exports = BlogService;
