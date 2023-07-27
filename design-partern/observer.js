class Publisher{
    constructor(){
        this.observers=[]
    }
    add(observer){
        this.observers.push(observer)
    }
    remove(observer){
        for(let index in this.observers){
            if(this.observers[index]===observer){
                this.observers.splice(index,1)
                break;
            }
        }
    }
    getList(){
        return this.observers
    }
    update(){
        this.observers.forEach(item=>item.update(this))
    }
}

class prdPublisher extends Publisher{
    constructor(){
        super()
        this.prdDc=null
    }
    setPrdDc(prd){
        this.prdDc=prd
        this.update()
    }
    getPrdDc(){
        return this.prdDc
    }
}


class Observer{
    constructor(name){
        this.name=name
    }
    update(){
        console.log(`${this.name} get update`)
    }
}

const Sy=new Publisher()
const t1=new Observer('test1')
const t2=new Observer('test2')

Sy.add(t1)
Sy.add(t2)
Sy.update()