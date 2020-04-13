import {User} from "./Models/User"


const user = new User({
    name: "Laith Harb",
    age: 23
})


user.on('change', () => {
    console.log("Change 1")
})
user.on('click', () => {
    console.log("Clicked")
})
user.on('change', () => {
    console.log("Change 2")
})


user.trigger('click')