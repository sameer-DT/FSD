this.onmessage=function(e){
    let obj=e.data;
    let res=obj.x*obj.y;
    this.postMessage(res);
}