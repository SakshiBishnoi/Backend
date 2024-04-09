const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set( 'views', __dirname + '/views' );  //specify the view directory

app.get('/', (req, res) => {
    //res.send(`H`)
    res.render('home');
});

app.listen(3000, () => {
    console.log('Listening on ports');
});