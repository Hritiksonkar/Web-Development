function memoise(fn) {
    let cache={};
    return function(num){
if(cache[num]!==undefined){
    console.log("fatching from the code");
    return cache[num]; 
}else{
    console.log("computing from the result");
    let result=fn(num);
    cache[num]=result;
    return result;
    
          }  
    }

}
const squre=memoise(x=>x*x);
console.log(squre(4));
console.log(squre(5));
console.log(squre(4));


