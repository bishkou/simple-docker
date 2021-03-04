const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('NOOOOOOOOO');
});

app.listen(8080, () => {
    console.log('listening');
})