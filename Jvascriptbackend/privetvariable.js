function secretstorege(secret) {
    return{
        getsecret:function  () {
            return secret;
        }
    }
    
}
const mysecret=secretstorege("i love JS");
console.log(mysecret.getsecret());
