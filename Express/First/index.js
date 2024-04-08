const express =  require('express');
const app =  express();
// app.use((req,res) => {
//     console.log("We have a new request!");
//     //res.send("Hello we got a request, this a response!")
//     //res.send({color: 'red'});
//     res.send('<h1>This is my webpage!</h1>');
// })

app.get('/cookies', (req, res) => {
    console.log('cookies request!!!');
    res.send('Cookie');
});
app.get('/cats', (req, res) => {
    console.log('cookies request!!!');
    res.send('Cats');
});

app.listen(3000,() => {
    console.log("Server is running");
});