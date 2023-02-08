class CafferMaker{
    constructor(){
        this.Capacity='500ml'
    }
    caffeStateHandle={
        that:this,
        caffe(){
            console.log('咖啡');
            console.log(`含量为${this.that.Capacity}`);
        },
        milk(){
            this.caffe()
            console.log('加点牛奶')
        },
        suger(){
            this.caffe()
            console.log('加点糖');
        }
    }
    changeState(state){
            this.caffeStateHandle[state]()
    }
}

const b=new CafferMaker()
b.changeState('milk')