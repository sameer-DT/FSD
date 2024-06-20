this.onmessage=function(e){
    let obj=e.data;
    let res=obj.p/obj.q;
    this.postMessage(res);
}