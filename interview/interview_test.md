## 问题1 prototype和__proto__的关系是什么
回答：据我所知构建的方式有三种，一种是new方法，另一种是对象字面量的方法，最后一种是es5提出的objectCreate方法，而其实对象字面量的方法是new方法的语法糖。
我们称作prototype为显式原型，称__proto__为隐式原型。
区别：显式原型（除了Function.prototype.bind方法外）在创建函数时，每一个函数在创建完之后都会拥有一个名为prototype的属性，这个属性指向了函数的原型对象，也就是说这个prototype其实是指向了构造这个函数的函数的。


隐式原型，在js中，[[prototype]]是一个隐式原型，javascript不希望开发者用到这个属性，在es5之前只能通过__proto__来访问到，es5有了新的方法，Object.getPrototypeOf()，
