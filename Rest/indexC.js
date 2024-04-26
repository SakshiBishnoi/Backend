// GET /comments - list all comments
// POST /comments - Create a new comment
// GET /comments/:id Get one comment (using ID)
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id Destroy one comment

const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        username : 'John',
        comment : 'lol that is so funny!'
    },
    {
        username : 'Skyler',
        comment : 'I like to go birdwatching with my dog'
    },
    {
        username : 'Sk8erBoi',
        comment : 'Plz delete your account, John'
    },
    {
        username : 'onlysayswoof',
        comment : 'woof woof woof'
    },
    {
        username : 'Jacky',
        comment : 'Those clouds look like giant marshmallows today.'
    },
    {
        username : 'Alex',
        comment : 'I wonder what the dinosaurs would think of our world?'
    },
    {
        username : 'Ruby',
        comment : 'Can not wait for it to be Friday again already!'
    },
    {
        username : 'Rocket',
        comment : 'This weather is so confusing! Is it shorts weather or sweatpants weather?'
    }
];

app.get('/comments',(req,res) => {
    res.render('comments/indexC', {comments})
})
app.get('/comments/new',(req,res) => {
    res.render('comments/new', {comments})
})
app.post('/comments',(req,res) => {
    const {username, comment} = req.body;
    comments.push({username, comment});
    //res.redirect('/comments');
    // console.log(req.body);
    res.send('it worked!');
    
})

app.get('/tacos', (req, res)=>{
    res.send(' GET /tacos response')
})
app.post('/tacos', (req, res)=>{
    console.log(req.body);
    const {food, qty} = req.body;
    res.send(`Here are your ${qty} ${food}`)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})