function createmulticounter() {
    let count=0;
    return{
        increment:()=>++count,
        decrement:()=>--count,
        getValue:()=>count

    };
    
}
const couterA=createmulticounter();
const couterB=createmulticounter();
console.log(couterA.increment());
console.log(couterA.increment());
console.log(couterA.decrement());
console.log(couterA.getValue());

console.log(couterA.increment());
console.log(couterA.getValue());

