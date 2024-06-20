this.onmessage=function(event){
    let obj=event.data;
    let add=obj.num1+obj.num2;
    this.postMessage(add);
}