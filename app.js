const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

// app.use(bodyParser.urlencoded());
app.use((req, res, next) => {
    console.log("always run");
    next(); //next process
});
app.use('/users', (req, res, next) => {
    console.log("masuk "+req.baseUrl);
    res.send(`Page "User"`); //simple response
});
app.use('/',(req, res, next) => {
    console.log("masuk "+req.baseUrl);
    res.send(`Halo dari expressJS`); //simple response
});

const port = 3000;
app.listen(port);