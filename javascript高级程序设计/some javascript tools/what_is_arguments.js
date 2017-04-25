    function doAdd(num1, num2) {
        arguments[1] = 10;
        alert(arguments[1])
    }
    doAdd()
        //javascript所有的参数都是值类型， 不能通过引用类型来传递参数