// // modular and reuseable
// // specialized  form of task
// // use form of partial application
// function add(a,b) {
//     return a+b;
    
// }
// console.log(add(5,6));
// // currid function
// function add(a) {
//     return function(b) {
//         return a+b;  
//     }
// }
// console.log(add(5)(1));

// greeting a user 
// function greet(mas) {
//     return function  (name) {
//         console.log(mas+"," +name+"!");
        
//     }
// }
// const hello=greet("hello");
// console.log(greet("hello")("vishva"));
// console.log(greet("gn")("motaka"));
// infinite curring
// function sum(a) {
//     return function(b){
//         if(b){
//             return sum(a+b)
//         }
//         return a;
//     }
    
// }

// console.log(sum(5)());
// console.log(sum(5)(6)());
// console.log(sum(5)(7)(5)());
// function curring in the case of the arrow functions

const add =a=> b=> c=> a+b+c;
console.log(add(1)(2)(3));
