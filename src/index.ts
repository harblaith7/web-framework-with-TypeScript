import {UserForm} from "./Views/UserForm"
import {User} from "./Models/User"

const user = User.buildUser({name: "Katie", age: 32})


const userForm = new UserForm(
    document.getElementById("root"),
    user
)


userForm.render()