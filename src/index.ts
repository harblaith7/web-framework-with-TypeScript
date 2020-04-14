import {User} from "./Models/User"

const user = User.buildUser({id: 3})

user.on('change', () => {
    console.log(user)
})

user.fetch()

