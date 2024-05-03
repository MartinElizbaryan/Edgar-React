export class User{
    static ID = 0
    constructor(name, surname,){
        this.name = name
        this.surname = surname
        this.id = User.getId()
    }
    static getId(){
        return User.ID++
    }
}