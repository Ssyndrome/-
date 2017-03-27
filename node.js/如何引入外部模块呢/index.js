let express = require('express');
let utility = require('utility');
//如你所见，上面两行代码引入了express和utility模块
let app = express();
//因为express本身就是一个函数，所以将它赋给变量app

app.get('/',function (req,res) {
   let q = req.query.q;
   console.log(req.query.q);
   let md5Value = utility.md5(q);
});
//调用app的get方法，传入handler函数，然后定义q变量，赋予它req.query.q的值，在控制台打出这个值，当你运行node index之后，打出的就是你url里传的参数。然后再解析成md5值
//
app.listen(3000,function (req,res) {
   console.log('app is running at port 3000')
});
