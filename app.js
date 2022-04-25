const express = require('express');
const mountRoutes = require('./routes/routes');

const app = express();
mountRoutes(app);

const port = 3000;

app.get('/', (req, res, next) => {
    res.send('Hello World')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});