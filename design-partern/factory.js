class peopelFactory{
    constructor(name,age,work){
        this.name=name
        this.age=age
        this.work=work
    }
}



console.log('-------------工厂模式------------');
const peopel1=new peopelFactory('李四',12,'code')
console.log('peopel1: ', peopel1);