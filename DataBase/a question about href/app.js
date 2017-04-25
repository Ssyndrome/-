const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('hello ');
})
app.get('/api/img', (request, response) => {
    response.json('假装我是一张图片')
})
app.listen(3000, (request, response) => {
    console.log('假装我是一张图片')
})