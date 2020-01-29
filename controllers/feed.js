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
    const title = req.body.title;
    const content = req.body.content;
  //Create post in DB
  res.status(201).json({
      message: 'Post created!',
      post: {
          id: new Date().toISOString(),
          title: title,
          content: content
      }
  });
};