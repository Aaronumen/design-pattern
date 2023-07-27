Function.prototype._apply = function (target) {
  //空值处理
  target = target || window;
  if (typeof target !== "object") {
    target = new target.constructor();
  }
  //创建一个唯一的键值,避免冲突
  const fn = Symbol();
  //将函数挂载在指定目标的 fn 上
  target[fn] = this;
  //提取函数参数
  const args = arguments[1];
  const result = args ? target[fn](...args) : target[fn]();
  //删除引用
  delete target[fn];
  //返回函数执行的结果
  return result;
};

const a = {
  name: "sssss",
};
const b = 3;
const test = function (age, age1) {
  console.log(this.name, age, age1,'apply实现');
  return this.name + age;
};
test._apply(b, [3, 4]);
// test.apply(a,[3])
console.log(test._apply(a));
