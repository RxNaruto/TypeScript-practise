"use strict";
function sumofage(user1, user2) {
    return user1.age + user2.age;
}
const age = sumofage({ name: 'Taro', age: 20 }, { name: 'John', age: 30 });
console.log(age);
