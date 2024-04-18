class User {
  static ID = 1
  constructor(person, description, status, action) {
   this.person = person
   this.description = description
   this.status = status
   this.action = action
   this.Id = User.getId()
  }
  static getId(){
    return User.ID ++
  }
} 

export default User
