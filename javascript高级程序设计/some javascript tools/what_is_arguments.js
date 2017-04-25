    function doAdd(num1, num2) {
        arguments[1] = 10;
        alert(arguments[1])
    }
    doAdd()
        //javascript所有的参数都是值类型， 不能通过引用类型来传递参数


    var person1 = '{}';
    var person2 = '{}';
    console.log(person1 == person2); // true
    //这个引用类型的比较值相同的，因为比较的是字符串，就是基本类型。


    var person1 = {};
    var person2 = {};
    console.log(person1 == person2); // false
    //这个返回错误，这就是因为，{}是一个对象，是引用类型，那么就意味着在内存中的地址是不一样的。

    //javascript的函数传递都是按值传递的！！！！！！分基本类型的值和引用类型的值！！！
    ///important javascript在函数中，传递的参数也是这样的，也是按值传递，也就是说，传参的意思就是将外部的值赋给函数内部的参数，就和把值从一个
    //变量复制到另一个变量一样，基本的类型的的传递就如同基本类型变量的复制一样，而引用类型值的传递，则如同引用类型变量的复制一样。
    //在像参数传递基本类型的值的时候，被传递的值会被复制给一个局部变量（即命名参数，其实就是arguments对象的一个元素，JavaScript一切皆对象。）
    //而在像参数传递引用类型的值的时候，会把这个值在内存中的地址赋值给一个局部变量，因此这个局部变量的变化，会反映在函数的外部。
    //下面是例子
    function addTen(num) {
        num += 10;
        return num;
    }
    var count = 20;
    var result = addTen(count);
    alert(count);
    alert(result);
    //可以看出count其实是一个基本类型，将count复制到addTen函数参数的局部变量，其实是参与运算的是函数本身的局部变量而不是count，所以count不会改变。

    //在看这个例子
    function setName(obj) {
        obj.sda = 'jose';
    }
    let person = new Object;
    setName(person);
    alert(person.sda)
    console.log(person);
    //person是一个对象，那么这里参数函数setName运算的其实就是person在堆内存中的引用了，所以，当我们打印出person时候，发现时一个object，但是这个对象的sda属性的值确实jose

    function setName(lee) {
        lee.name = 'jose';
        lee = new Object();
        lee.name = 'hang';
    }
    let person = new Object();
    setName(person);
    console.log(person)
    alert(person.name)
        //这个例子就稍微有点难懂了，但是如果你仔细想想还是可以明白的，首先person是对象，那么他就是一个引用类型，它在堆中有着独一无二的地址，这个地址赋值到了函数内部的参数上，
        //这是也就是说地址的值变成了jose，这时候，又将一个新的对象赋值给了person，这时就会产生另一个地址了。

    //five hours