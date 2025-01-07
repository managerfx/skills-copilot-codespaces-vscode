// Create web server

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
