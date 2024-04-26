// GET /comments - list all comments
// POST /comments - Create a new comment
// GET /comments/:id Get one comment (using ID)
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id Destroy one comment

const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid} = require('uuid');
uuid();

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        id : uuid(),
        username : 'John',
        comment : 'lol that is so funny!'
    },
    {
        id : uuid(),
        username : 'Skyler',
        comment : 'I like to go birdwatching with my dog'
    },
    {
        id : uuid(),
        username : 'Sk8erBoi',
        comment : 'Plz delete your account, John'
    },
    {
        id : uuid(),
        username : 'onlysayswoof',
        comment : 'woof woof woof'
    },
    {
        id : uuid(),
        username : 'Jacky',
        comment : 'Those clouds look like giant marshmallows today.'
    },
    {
        id : uuid(),
        username : 'Alex',
        comment : 'I wonder what the dinosaurs would think of our world?'
    },
    {
        id : uuid(),
        username : 'Ruby',
        comment : 'Can not wait for it to be Friday again already!'
    },
    {
        id : uuid(),
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
    
    // console.log(req.body);
    //res.send('IT WORKED');
    res.redirect('/comments');
})

app.get('/comments/:id',(req,res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === parseInt(id))
    //console.log(comment);
    res.render('comments/show', {comment})
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