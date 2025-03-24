// globle scope
let name1="hritik"
let name2="hritik"
let name3="hritik"

function fun1() {
    let f2=12;
    let f1=73;
    let f3=83;
    console.log( f1,name1,name2,name3);
    
}
fun1()
{
    // var is use outside if inisilized in inside  butlet or const or not
    let age1=20;
    var age2=23
    console.log("insider block" ,age1,age2,name1,name2,name3);
    
}
console.log("outside block",age2,name1,name2,name3);
//  lexical scoping
function  outefunctio() {
    let outerver="i am from outer fn"
    return function innerfunction(){
        console.log(outerver);
        
    }
    
}
const innerfunc=outefunctio();
innerfunc();