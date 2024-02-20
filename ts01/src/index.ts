interface user{
    name: string;
    age: number;
}
function sumofage(user1: user ,user2: user){
    return user1.age + user2.age;
}

const age = sumofage({name: 'Taro' , age: 20},{name: 'John' ,age: 30});
console.log(age);