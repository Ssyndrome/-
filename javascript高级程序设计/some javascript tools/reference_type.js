//引用类型
//objec类型
let person = new Object();
person.name = 'jose';
person.age = '20' //普通的类定义方法

let person = {
        name: 'jose',
        age: '20'
    } //对象字面量定义方法

let person = {}; //这样也可以

function display(args) {
    let output = '';
    if (typeof args.name == 'string') {
        output += 'name: ' + args.name + '\n';
    }
    if (typeof args.name == 'number') {
        output += 'Age' + args.age + '\n';
    }
    alert(output.name);
    console.log(output[age])
}
display({
    name: 'jose',
    age: '20'
})
display({
        name: 'jesus'
    })
    //在JavaScript中可以使用点表示法，也可以使用方括号表示法来访问属性。如这个例子alert(output.name);
    //console.log(output[age])，如果属性含有一些不便使用点表示法的字符的话，用方括号就好

////！！！！数组array
let colors = new Array();
//如果预先就知道，数组要保存的项目数量，可以给构造函数传递书看量，该该变量就会自动变成length的值。比如这样let colors = new Array(20);
let colors = new Array(3); //创建了一个三项的数组
let names = new Array('jsoe'); //创建了一个一项的数组，字符串“jose”

//同样的是，创建数组也可以使用数组字面量的表示法，
let colors = ['red', 'blue', 'green']; //创建一个有着三项字符串的数组
let names = []; //创建一个空数组
let values = [1, 2, ] //这样不推荐
let options = [, , , , , ] //这样不推荐


//数组的最后一项永远是length-1，下一项就是length

//如何检测数组，array is array函数
//toLocaleString 方法返回一个该对象的字符串表示。该方法主要用于被本地化相关对象覆盖,而toString返回拼接的字符串
//ECMASCRIPT提供了类似栈的的行为的一种方法，push()和pop()方法，push将一个数组添加到数组末尾，pop移除最后一项民间下length，然后返回最后一项
let color = ['red', 'yellow', 'green'];
color.push('black');
console.log(color)

//队列方法，先进先出shift()和push()还有unshift()
//重要的是shift是拿掉第一项，也就是说，第二项会变成第一项.而unshift是在数组的前端添加一个数组项，可接受多个参数。


////排序方法，reverse()和sort()方法
//reverse()函数非常简单，简单反转字符串，sort()方法则是比较字符串，他调用toString方法，来比较值。注意，这里比较的是字符串的值，而不是number的值
//而sort方法可以接受一个比较函数来进行精确的比较
function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value > value2) {
        return 1;
    } else {
        return 0;
    }
}
sort(compare)
    //可以使用compare作为比较函数，而对于数值类型，通常可以使用valueOf来返回，下面的这个函数
function compare(value1, value2) {
    return value2 - value1;
}
//这个只有三种结果，一是正数，负数，最后是0.

//操作方法  contact方法，他是一个合并方法，这个方法会首先创建一个数组，在将接收到的参数添加到末尾。