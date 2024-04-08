const express =  require('express');
const app =  express();
// app.use((req,res) => {
//     console.log("We have a new request!");
//     //res.send("Hello we got a request, this a response!")
//     //res.send({color: 'red'});
//     res.send('<h1>This is my webpage!</h1>');
// })

app.get('/', (req, res) => {
    res.send('This is homepage');
});
app.get('/cats', (req, res) => {
    res.send('Cats');
});
app.get('/cookies', (req, res) => {   
    res.send('Cookie');
});

app.post('/cookies', (req, res) => {    
    res.send('Its a post reques');
});
app.get('/search', (req, res) => {  
    const {q} = req.query; 
    if(!q){
        return res.send('Please provide a search term')
    }
    console.log('Search query', req.query); 
    res.send(`Search query: ${q}`); 
});


// app.get('/r/:subreddit', (req, res) => {
//     console.log(req.params);
//     const {subreddit} = req.params;
//     res.send(`<h1>Browsing the ${subreddit} subreddit.</h1>`);
// });
// app.get('/r/:subreddit/:postId', (req, res) => {
//     const {subreddit, postId} = req.params;
//     res.send(`<h1>Viewing Post Id : ${postId} on ${subreddit} subreddit.</h1>`);
// });


app.get('*', (req, res) => {    
    res.send('I do not know this path');
});


app.listen(3000,() => {
    console.log("Server is running");
});