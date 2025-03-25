// Problem to Toggle a Boolean
// Task: use an IIFE to Toggle a boolean variable 3 times and print the result each time 
let Toggle =(function(){
    let state=false;
    return function(){
        state=!state;
        console.log("toggle",state);
    }
    
})();
Toggle();
Toggle();
Toggle();
Toggle();
console.log(typeof Toggle);
