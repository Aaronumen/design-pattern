class Bus{
    constructor(){
        this.handlers={}
    }
    on(eventName,cb){
        if(!this.handlers[eventName]){
            this.handlers[eventName]=[]
        }
        this.handlers[eventName].push(cb)
    }
    emit(eventName,...arg){
        if(this.handlers[eventName]){
            this.handlers[eventName].forEach(cb=>cb(...arg))
        }else{
            throw new Error(`no ${eventName} bus,please add on after emit`)
        }
    }
    off(eventName,cb){
        if(this.handlers[eventName]){
            const cbIdx=this.handlers[eventName].indexOf(cb)
            this.handlers[eventName].splice(cbIdx,1)
        }else{
            throw new Error(`no ${eventName} bus,please add on after off`)
        }
    }
    once(eventName,cb){
        const warp=(...arg)=>{
            cb(...arg)
            this.off(eventName,cb)
        }
        this.on(eventName,warp)
    }
}

const bus=new Bus()

bus.once('once',(name)=>{
    console.log(`触发了 test 的${name}`);
})

bus.on('test',(name)=>{
    console.log(`触发了 test 的${name}`);
})

// bus.off('test')

bus.emit('once','吃饭')

bus.emit('once','吃饭1')

export{
    bus
}