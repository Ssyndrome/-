let express = require('express');
let cheerio = require('cheerio');
let superagent = require('superagent');

let app = express();


app.get('/',function (req,res,next) {
    superagent.get('http://www.zhipin.com/c101210100-p130111/?page=3').end(function (err,sres) {
        if(err){
            return next(err);
        }
        let $ = cheerio.load(sres.text);
        let items = [];
        $('.job-primary .info-primary .name').each(function (idx,element) {
            let $element = $(element);
            items.push({
                title:$element.text(),
            });
        });
        let companyName = [];
        $('.info-comapny .company-text .name').each(function (idx,element) {
            let $element = $(element);
            companyName.push({
                cotitle:$element.text(),
            });
        });
        let copyD = items.concat(companyName);
        res.send(copyD);
    });
});
app.listen(3000,function (req,res) {
    console.log('port 3000')
});