// IIFE with closure
// problem:return a function to add a fixed number to its argument 
const add7=(function(){
    let fixed=7;
    return function(num){
        return num+fixed;
    }
})();
console.log(add7(12));
