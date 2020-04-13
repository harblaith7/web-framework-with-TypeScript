import {User} from "./Models/User"


const user = new User({
    name: "Laith Harb",
    age: 23
})


console.log(user.get('name'))