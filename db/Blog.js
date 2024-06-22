const mongoose = require('mongoose');
const { number } = require('zod');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    isPublished: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    updatedAt: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true,
        default: 1232,
        unique: true,
        index: true,
        autoIncrement: true
    }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;