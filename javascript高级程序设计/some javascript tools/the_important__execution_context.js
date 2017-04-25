///！！！javascript里最重要的一个概念，执行环境。

var color = 'blue';

function getColor() {
    color = 'red'
    return color;
}
console.log(getColor())
    //这个例子，我们知道每个函数都有自己的执行环境，全局和局部，当代码在一个环境中执行的时候，会创建变量对象的作用域链。作用域链的用途，是保证对执行环境有权访问的所有变量和函数的有序访问，
    //标识符解析，是沿着作用域链一级一级的搜索标识符的过程，搜索过程始终从错用于的前端开始，然后足迹的向后回溯，直至找到标识符。就是从内层函数开始，沿着作用域链一层一层的搜索，直至对周的全局对象，若找不到，通常导致错误的发生。
    //上面的这个例子，执行getColor的时候，首先在函数的内部寻找标识符，color，然后会直接返回color是red;


var color = 'blue';

function getColor() {
    return color;
}
console.log(getColor())
    //再来看这个例子，他会先寻找，getColor函数内部的变量，然后会搜索外部，在全局函数中找到了color变量。返回blue