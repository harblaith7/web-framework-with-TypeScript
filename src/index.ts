import {User} from "./Models/User"

const user = new User({name: "Matteo Sis", age: 23})

user.events.on("change", () => {
    console.log("OOoooh he puts it in")
})


user.events.trigger('change')