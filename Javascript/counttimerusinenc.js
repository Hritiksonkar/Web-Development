// countdown timer Using IFFE
// problem print numbers from 5to 1 with a delay of 1 second between each
for (let  i = 10;  i >0;  i--) {
    (function(num){
        setTimeout(()=>console.log(num),(6-num)*1000)
        
    })(i); 
}