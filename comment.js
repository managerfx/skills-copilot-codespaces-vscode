// Create a web server
// Create a route for '/comments'
// Send a response with a JSON object
// The JSON object should have a key 'comments' with a value of an array of strings
// Each string should be a comment you'd like to share
// Start your server and test your code by visiting http://localhost:3000/comments in your browser
// If you're having trouble, run the test to see if you're on the right track!

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
    res.json({
        comments: [
            'This is a comment',
            'This is another comment',
            'This is yet another comment'
        ]
    });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
