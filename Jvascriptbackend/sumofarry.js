// sum of arry element using IIFE
// problem calculate the sum of [1,2,3,4,4]
let sum =(function(arry){
return arry.reduce((acc,num)=>acc+num,0)
})([1,2,,3,4,5]);
console.log(sum);
