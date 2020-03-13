
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');

// setup app and mongoose connection
const app = express()
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/perfectblog', { useNewUrlParser: true, useUnifiedTopology: true });

// setup database models
const Post = mongoose.model('Post', { title: String, body: String });
const Comment = mongoose.model('Comment', { postid: String, comment: String });

// api routes
app.post('/posts', (req, res) => {
    const new_post = new Post({ title: req.body.title, body: req.body.body});
    new_post.save().then(() => {
        console.log('post saved!');
        res.send("post saved!");
    }).catch((err) => {
        res.send("error: ", err);
    });
});

app.get('/posts', (req, res) => {
    // find all posts and return
    Post.find({}, (err, posts) => {
        res.send(posts);
    });
});

app.get('/posts/:id', (req, res) => {
    Post.find({_id: req.params.id}, (err, post) => {
        res.send(post);
    })
});

app.get('/comment/:id', (req, res) => {
    Comment.find({postid: req.params.id}, (err, comments) => {
        res.send(comments);
    })
});

app.post('/comment', (req, res) => {
    const new_comment = new Comment({postid: req.body.postid, comment: req.body.comment});
    new_comment.save().then(() => {
        console.log('comment saved!');
        res.send('comment saved!');
    }).catch((err) => {
        res.send("error: ", err);
    });
});



// listen for requests
app.listen(3000, () => console.log("API listening on port 3000!"))