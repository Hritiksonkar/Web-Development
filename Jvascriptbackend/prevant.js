// prevent Globale Scope Pollutin Define a variable xinside an IIFF and prevant access outside
// function name(params) {
    
// }
(function(){
    var x=43;
    console.log("inside IIFE",x);
    
})();
console.log(x);
