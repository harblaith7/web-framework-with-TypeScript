import {User} from "./Models/User"


const user = new User({
    name: "Laith Harb",
    age: 23
})


user.set({name: "Shelby Boell"})


console.log(user.get('name'))
console.log(user.get('age'))