let express = require('express');//引入express模块
let app = express();//将express函数赋予变量app

app.get('/',function (req,res) {
    res.send('I have been thinking about how to study in a short time.And I find this way.I think it is a great place to study');
});//调用app的也就使express的get方法，传入根目录的路径，并且指定一个handler函数，一个是req也就是请求，一个是res，也就是回复。然后res.send一个字符串到浏览器
app.listen(3000,function () {
   console.log('app is listening port 3000');
});//调用listen方法监听3000端口，并且传入handler函数，在控制台打出信息，然后执行node index.js，之后再访问localhost:3000