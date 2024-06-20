this.onmessage=function(e){
    let obj=e.data;
    let res=obj.a-obj.b
    this.postMessage(res);
}