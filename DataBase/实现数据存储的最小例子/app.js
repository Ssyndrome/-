const express = require('express');
const mongoose = require('mongoose');
const app = express();
const art = require('./creat.js');

app.get('/', (request, response) => {
    response.send('fuck 蛤蛤');
});

const newArticle = new art({
    title: 'da',
    body: 'da',
    date: 'da'
})


app.get('/saveArt', (request, response) => {

    newArticle.save(function(err) {
        if (err) {
            console.log(err)
        } else(
            console.log('save success')
        )
    })
});

app.listen(3010, (request, response) => {
    console.log('server start')
})