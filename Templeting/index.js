const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.set('view engine','ejs');
app.set( 'views', __dirname + '/views' );  //specify the view directory

app.get('/', (req, res) => {
    //res.send(`H`)
    res.render('home');
});
app.get('/cats', (req, res) => {
    const cats = ['Blue','Whiskers','Fluffy', 'Snowball', 'Mittens', 'Buddy', 'Cuddles'];
    res.render( 'cats',{ cats });
});

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    console.log(data);
    //res.render('subreddit',{subreddit});
    res.render('subreddit',{ ...data});
});

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 100) + 5;
    res.render('random', {num});
});



app.listen(3000, () => {
    console.log('Listening on ports');
});