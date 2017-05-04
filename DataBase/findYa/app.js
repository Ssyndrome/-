const fs = require('fs');
const superAgent = require('superagent')
const cheerio = require('cheerio')
const express = require('express')
const request = require('request')
const app = express()
const items = []
const href = []
const title = []

app.get('/', function(req, res, next) {

    superAgent.get('http://www.youzi4.cc/mm/meizitu/index.html').end(function(err, sres) {
        if (err) {
            return (err)
        }
        let $ = cheerio.load(sres.text);
        $('.falls-detail .falls_container ul li a img ').each(function(idx, element) {
            let $element = $(element);
            href.push($element.attr("src"))
        });
        $('.falls-detail .falls_container ul li a img ').each(function(idx, element) {
            let $element = $(element);
            title.push($element.attr("alt"))
        });

        for (let i = 0; i < href.length; i++) {
            let img_src = title[i] + '.jpg'
            request.head(href[i], function(err, res, body) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('success')
                }

            });
            request(href[i]).pipe(fs.createWriteStream('./image/' + img_src))

        }

    })
    res.send(href)
})

app.listen(3000, (res, req, next) => {
    console.log('listen 3000')
})