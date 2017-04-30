//函数实际上只是一个对象，每个函数都是function的实例。
function sum(num1, num2) { return num1 + num2 }
let sum = function(num1, num2) { return num1 + num2 }
    //这两个函数其实是相等的。
let sum = function(num1, num2) { return num1 + num2 } //关于这个函数，虽然会造成二次解析，造成性能的拖累，很直观的告诉你，函数其实是一个引用类型，而这个函数是在堆中有着明确的内存地址的。
    //这样就可以理解为何没有函数的重载了，因为函数是一个单独的独立的内存地址，而函数名就是指针，所以它指向的就是单独的内存地址，所以很明显，不能。


alert(sum(10, 10));

function sum(num1, num2) {
    return num1 + num2;
} //这段代码，虽然alert函数位于sum函数之前调用，但是执行起来完全没有问题，这就是因为代码在执行之前，揭晓就已经通过一个名为函数声明提升的过程，读取并把函数声明添加到执行环境之中。

alert(sum(10, 10));

let a = function(num1, num2) {
        return num1 + num2;
    } //如果像这样就会出现错误，因为函数在一个初始化语句之中，而不是一个函数声明。


//apply和call
function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
}
let student = new Student('qian', 21, 'grade1');
console.log("name: " + student.name + '\n' + student.age + '\n' + student.grade) //总的来说，apply和call其实是一个继承的属性，
    //在给对象参数的情况下, 如果参数的形式是数组的时候, 比如apply示例里面传递了参数arguments, 这个参数是数组类型, 并且在调用Person的时候参数的列表是对应一致的(也就是Person和Student的参数列表前两位是一致的) 就可以采用 apply, 如果我的Person的参数列表是这样的(age, name), 而Student的参数列表是(name, age, grade), 这样就可以用call来实现了, 也就是直接指定参数列表对应值的位置(Person.call(this, age, name, grade));
window.color = 'red';
let o = {
    color: 'blue'
};

function sayColor() {
    alert(this.color)
};
let objectSayColor = sayColor.bind(window);
objectSayColor(); //bind函数可以指定this，如果bind传o alert出blue，如果是window则alert red


function Person() {

}
Person.prototype.name = 'jose';
Person.prototype.age = '20';
Person.prototype.job = 'softWare engineer'
Person.prototype.sayName = function() {
    alert(this.name)
}
let person1 = new Person();
person1.sayName();
console.log(Person.prototype.constructor)
let person2 = new Person;
person2.sayName();
console.info(name in person2)

//原型对象，无论何时，只要创建了一个新的函数，就会根据一组特定的规则来创建一个prototype属性，这个属性指向函数的原型对象，默认情况下，所有原型对象都会自动的获得一个constructor的属性，这个属性指向一个prototype所在的指针
//。Person.prototype.constructor指向了person，而_proto_，存在于实例与构造函数的原型对象之间。in操作符是，如果该属性可以被访问到，无论是在实例中还是在原型中，返回true，反之false
function Person() {

};
Person.prototype.name = 'jose';
Person.prototype.age = 29;
Person.prototype.job = 'engineer';
Person.prototype.sayName = function() {
    alert(this.name)
}

let keys = Object.keys(Person.prototype);
console.log(keys);
//这个函数可以取得实例上所有可以枚举的属性


function Person() {

};
let b = new Person();
Person.prototype = {
    name: 'jose',
    age: 20,
    job: 'engineer',
    sayName: function() {
        alert(this.name);
        console.log(this)
    }
}
let keys = Object.keys(Person.prototype);
console.log(keys);
let a = new Person();
b.sayName();
a.sayName();
//原型的修改其实是动态的，我们在原型上的修改可以立刻在实例上反映出来，即便是先创建了实例后修改原型对象也是可以立即访问的，这归功于原型和实例的松散的连接关系，但是一旦重写整个原型的时候，例如上面的这段代码。
//b实例先于a实例，但是b实例之后重写了整个原型对象，这时候执行b的时候就会返回未定义。其实我们可以理解为，重写一个原型对象就是在内存中有了一个新的地址。
//我们最常用的就是构造函数模式和原型模式组合起来使用，比如下面的这段代码。