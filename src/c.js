class User {
    constructor(name, suranme){
        this.name = name
        this.suranme = suranme
    }
    getFullName(){
        return `${this.name} ${this.suranme}`
    }
}
export default User