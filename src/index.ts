import {User} from "./Models/User"

const user = new User({id : 1, name: "Andrew", age: 23})

user.on('save', () => {
    console.log(user)
})



user.save()

