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