Function.prototype._bind=function(){
  const args=Array.from(arguments);
  const fn = Symbol()
  let target=args.shift() || window;
  if(typeof target !== 'object'){
    target=new target.constructor()
  }
  target[fn]=this
  // const _this=this
  return function (...args){
    target[fn](...args)
    // _this.apply(target,[...args])
    delete target[fn]
  }
}

const a = {
  name: "ssssss",
};

function test(name, age) {
  console.log(this.name + age + "岁",'_bind实现');
  return "_bind实现";
}

test._bind(a,'aaronumen',10)()
