const obj= {
    "name" : "John Doe",
    "age" : 30,
    "greet": function() {
        console.log("hello word")
    }
}
obj.greet()
console.log(obj)
const obj1 = {
    1: "John Doe",
    true: "mohan",

}
console.log(obj1)

const car ={
    brand:'tasla',
    model:'model 3',
    //start: (){
    //    console.log('car started')
    start : function(){
        console.log('car started')
    }
}
car.start()

