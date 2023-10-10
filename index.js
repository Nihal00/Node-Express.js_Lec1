//ES5
const express = require('express');

//ES6
//import express from 'express;

const app = express();

//creating hello world API
app.get('/hello-world', (req, res) => {
    res.send("Hello World"); //sending response to client side
})

app.listen(8000, () => {
    console.log("Server is running on port", 8000);
})