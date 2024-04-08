const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/', (req, res) => {
    //res.send(`H`)
    res.render('home.ejs');
});

app.listen(3000, () => {
    console.log('Listening on ports');
});