const { validationResult } = require('express-validator/check');

const Post = require('../models/post');

exports.getPosts = (req, res, next) =>{
    res.status(200).json({
        posts: [{
            _id: '112',
            title: 'First Post',
            content: 'The first post content',
            imageUrl: 'images/sample.jpg',
            creator: {
                name: 'Matt H'
            },
            date: new Date()
        }]
    });
};

exports.createPost = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ message: 'Validation failed, data incorrect', errors : errors.array()})
    }
    const title = req.body.title;
    const content = req.body.content;
    const post = new Post({
        title: title,
        content: content,
        imageUrl: 'images/sample.jpg',
        creator : {name: 'Matt'}
    });
    post.save().then(result =>{
        res.status(201).json({
            message: 'Post created!',
            post: result
        });
    }).catch(err =>{
        console.log(err);
    });
};