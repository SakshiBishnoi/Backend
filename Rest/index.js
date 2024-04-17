const express = require('express');
const app = express();

app.use(express.urlencoded({extended : true}));

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