import {Collection} from "./Models/Collection"
import {User, UserProps} from "./Models/User"


const collection = new Collection<User, UserProps>(
    "http://localhost:3000/users",
    (json: UserProps) => User.buildUser(json)
)

collection.on("change", () => {
    console.log(collection)
})

collection.fetch()