import {UserEdit} from "./Views/UserEdit"
import {User} from "./models/User"

const user = User.buildUser({name: "Katie", age: 32})

const root = document.getElementById("root")

if(root){
    const userEdit = new UserEdit(
        root,
        user
    )
    userEdit.render()

    console.log(userEdit)
} else {
    throw new Error("Not found")
}



