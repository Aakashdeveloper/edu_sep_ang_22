const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT||9905;

app.use(express.static(path.join(__dirname,'dist/flipapp')));

app.get('/',(req,res) => {
    res.send('dist/flipapp/index.html')
});

app.listen(port);