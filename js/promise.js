class _Promise{
    constructor(execute){
        this.status='PENDING';
        this.value=undefined;
        this.reason=undefined;
        this.onFulfillFn=[];
        this.onRejectedFn=[];
        const resolve=(val) => {
            if(this.status==='PENDING'){
                this.status='FULFILLED'
                this.value=val
                queueMicrotask(()=>{
                    this.onFulfillFn.forEach(fn=>fn())
                })
            }
        }
        const reject=(error)=>{
            if(this.status==='PENDING'){
                this.status='REJECTED'
                this.reason=error
                queueMicrotask(()=>{
                    this.onRejectedFn.forEach(fn=>fn(error))
                })
            }
        }
        try{
            execute(resolve,reject)
        }catch(e){
            throw new Error(e)
        }
    }
    then(onFulfill,onRejected){
        onFulfill=onFulfill||((value)=>{
            return value
        });
        onRejected=onRejected || ((err)=>{
            throw err
        })
        return new _Promise((resolve,reject)=>{
            try{
                if(this.status==='FULFILLED'){
                    resolve(onFulfill(this.value))
                }
                if(this.status==='PENDING'){
                    this.onFulfillFn.push(()=>{
                        resolve(onFulfill(this.value))
                    })
                }
                if(this.status==='REJECTED'){
                    reject(this.reason)
                }
            }catch(err){
                reject(err)
            }
        })
    }
    catch(onRejected){
        const reason=this.then(null,onRejected)
        return reason
    }
    finally(onFinally){
        return this.then(onFinally,onFinally)
    }
}

const fn=()=>(new Promise((resolve,reject)=>{
    resolve(333)
}).then(val=>{
    console.log(val)
    return val+1
    // console.log(444)
}).then(val=>{
    console.log(val)
    throw '错误'
    // console.log(5555555555)
})).catch(err=>{
    console.log(err,'err')
}).finally((val)=>{
    console.log('val',val)
})
fn()


