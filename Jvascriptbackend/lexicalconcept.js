const counter=(function(){
    let count=0;
    return{
        increment:function(){
            count++;
        },
        getCount:function(){
            return count;
        }
    }
})();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
counter.increment();
counter.increment();
console.log(counter.getCount());



