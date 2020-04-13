import {User} from "./Models/User"


const user = new User({
    name: "Laith Harb",
    age: 23
})


user.on('change', () => {})
user.on('click', () => {})
user.on('change', () => {})


console.log(user)