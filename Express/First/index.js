const express =  require('express');
const app =  express();
app.use( () => {
    console.log("We have a new request!");
})

app.listen(3000,() => {
    console.log("Server is running");
});