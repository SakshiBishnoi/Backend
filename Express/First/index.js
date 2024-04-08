const express =  require('express');
const app =  express();
app.use((req,res) => {
    console.log("We have a new request!");
    //res.send("Hello we got a request, this a response!")
    res.send({color: 'red'});
})

app.listen(3000,() => {
    console.log("Server is running");
});