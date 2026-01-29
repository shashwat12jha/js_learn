const sym =Symbol("key1");
const user = {
    name : "Hitesh",
    age: 18,
    [sym]: "MyKey1" ,
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"] 
}
user.greeting = function(){
    console.log(`Pretty little babyy, ${this.age}`)
}
console.log(user.greeting());

