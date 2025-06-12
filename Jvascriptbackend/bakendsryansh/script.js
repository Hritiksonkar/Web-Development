//fundamental  javascript loop & arry map 

// var arr= [1, 2, 3, 4, 5];
// arr.forEach(function(val){
//     console.log(val +"hello world");
    
// })

// 

// var arr = [1, 2, 3, 4, 5];
// var ans =arr.filter(function(val){
//     if (val>=2){return true;}
//     else return false;
// })
// console.log(ans);

// var arr = [1, 2, 3, 4, 5];
// var ans = arr.find(function(val){
// if (val===2)return val;
// })
// console.log(ans); 

//arry and object
// {
//     var obj = {
//         name: "ryansh",
//         age: 20,
//         isActive: true,
//         hobbies: ["reading", "gaming", "coding"],
//         address: {
//             city: "Delhi",
//             state: "Delhi"
//         }
//     };

//     console.log(obj.name); // Accessing property
//     console.log(obj.hobbies[1]); // Accessing array within object
//     console.log(obj.address.city); // Accessing nested object property
// }

// 1. function return
function add(a, b) {
    return a + b;
}

console.log(add(5, 10)); 

//aysnc function
async function abcd() {
    var blob = await fetch('https://randomuser.me/api/');
    var ans = await blob.json();
    console.log(ans.results[0].name)
}
abcd(); 