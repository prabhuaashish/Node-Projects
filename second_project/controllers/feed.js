const { check, body, validationResult } = require('express-validator');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [
            {
                id:'1',
                title: "First Post",
                content: "This is the first post!",
                imageUrl: 'images/logo.png',
                creator: {
                    name: 'John',
                },
                createdAt: new Date()

            }
        ]
    })
}

exports.createPost = (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        throw error;
    }
    const title = req.body.title;
    const content = req.body.content;
    const post = new Post({
        title: title,
        content: content,
        creator: {
            name: 'John',
        },
        imageUrl: 'images/logo.png',
    })
    post
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Post created!',
                post: result
            })
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
}