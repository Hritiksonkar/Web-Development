function genrateiD() {
    let id =0;
return function  () {
    id++;
    return id;

  }
}
const genrateid=genrateiD();
console.log( genrateid());
console.log(genrateid());
