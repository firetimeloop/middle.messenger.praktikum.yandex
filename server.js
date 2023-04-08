const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.use(function (req, res, next) {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; font-src 'self'; img-src https://ya-praktikum.tech; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; frame-src 'self'; connect-src *"
    );
    
    next();
});

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
})

app.listen(PORT, () => {
});
