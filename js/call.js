Function.prototype._call = function () {
  //3种方法类数组转换为数组
  //1.最好最快的方法
  //   const args = Array.prototype.slice.apply(arguments);
  //2.Array.form
  const args = Array.from(arguments);
//   3.for in
//   let args=[]
//   for(let key in arguments){
//     args[key]=arguments[key]
//   }
// 4.for of
//   let args=[]
//   for(let val of arguments){
//     args.push(val)
//   }
  const fn = Symbol();
  let target = args.shift() || window;
  if (typeof target !== "object") {
    target = new target.constructor();
  }
  target[fn] = this;
  const result = args ? target[fn](...args) : target[fn]();
  delete target[fn]
  return result;
};

const a = {
  name: "ssssss",
};

function test(name, age) {
  console.log(name + age + "岁",'_call实现');
  return "_call实现";
}

test._call(a, "aaronumen", 4);
