var beatInterval = 1000; //心跳间隔
var heartCheck = {
    //发送空包
    timeoutObj:null,
    //这个定时器用来监听判断是否超时
    servertimeoutObj:null,
    reset:function(){
        clearTimeout(this.timeoutObj);
        clearTimeout(this.servertimeoutObj);
        this.start;
    },
    start:function(){
        var self = this;
        this.timeoutObj = setTimeout(()=>{
            socket.send();
            self.servertimeoutObj = setTimeout(()=>{
                self.reconnect();
            },beatInterval);
        },beatInterval);
    }
}
