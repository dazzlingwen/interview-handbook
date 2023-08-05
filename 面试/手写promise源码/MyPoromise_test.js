class MyPoromise_test{
    constructor(executor) {
        executor(this.resolve,this.reject)
    }
    state = PENDING;
    value = undefined;
    reason = undefined;
    successCallback =[];
    failCallback = [];

    resolve = value =>{
        if(this.state !== PENDING) return
        this.value = FULFILLED
        this.value = value
        while (this.successCallback.length) this.successCallback.shift()(this.value)
    }

    reject = reason => {
        if(this.state !== PENDING) return
        this.state = REJECTED
        this.reason = reason

        while(this.failCallback.length) this.failCallback.shift()(this.reason)
    }

    then(successCallback,failCallback){
        let promise2 = new MyPoromise_test((resolve,reject)=>{
            if(this.state === FULFILLED){
                let x = successCallback(this.value);
                resolve(x)
            }else if(this.state === REJECTED){
                failCallback(this.reason)
            }else{
                this.successCallback.push(successCallback)
                this.failCallback.push(failCallback)
            }
        })
        return promise2;
    }
}

