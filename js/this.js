// 1. 执行顺序
let a = 'global';
console.log(a);

function course() {
    let b = 'js';
    console.log(b);

    session();
    function session() {
        let c = 'this';
        console.log(c);

        teacher();
        // 2. 函数提升 - 作用域之内
        function teacher() {
            // 2.1 let不支持提升
            // 2.2 变量通过var支持提升，声明提升
            // var e = undefined
            console.log(e);
            let d = 'yunyin';
            var e = 'yy';
            // e = 'yy';
            console.log(d);

            console.log('test1', b) // 3. 作用域向上查找，向下传递
        }
    }
}
course();

// 提升优先级
console.log('yunyin', yunyin);
function yunyin() {
    this.course = 'js'
}
yunyin = 'course';
// 变量优先 => 函数需要变量

// 块级作用域
// if (true) {
//     let e = 111;
//     var f = 222;
// }
// console.log(f);
// console.log(e);

// function foo() {
//     console.log('函数内部', this)
// }

// foo()
//隐式绑定
function fn() {
    console.log('隐式绑定', this.a)
}
const obj = {
    a: 1,
    fn
}

obj.fn = fn;
obj.fn();

const foo = {
    bar: 10,
    fn: function() {
        console.log(this.bar);
        console.log(this);
    }
}
// 取出
let fn1 = foo.fn;
// 独立执行
fn1();//undefined window

// 追问1: 如何改变属性指向
const o1 = {
    text: 'o1',
    fn: function(){
        // 直接使用上下文 - 传统派活
        console.log('o1fn', this);
        return this.text;
    }
}

const o2 = {
    text: 'o2',
    fn: function() {
        // 呼叫领导执行 —— 部门协作
        console.log('o2fn------',this.text)
        return o1.fn();
    }
}

const o3 = {
    text: 'o3',
    fn: function() {
        // 直接内部构造 —— 公共人
        let fn = o1.fn;
        return fn();
    }
}

const o4={
    text:'o4',
    fn:function(){
        let fn1=()=>console.log('o4',this.text);
        return fn1
    }
}

console.log('o1fn', o1.fn());//o1
console.log('o2fn', o2.fn());//o1
console.log('o3fn', o3.fn());//undefined
console.log('o3fn', o4.fn()());//undefined