import users from "./users.js";

let newArr = [];
for (let user of users) {
    const newObj = { ...user, isActive: true };
    newArr.push(newObj);
}
console.log(newArr);

const neoArr = [];
users.forEach(user => {
    neoArr.push({ ...user, isActive: true });
});
console.log(neoArr);
