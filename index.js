const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/random', (req, res) => {
    const rand = Math.floor(Math.random() * 10000000000000000)
    res.send(rand.toString());
});


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})
