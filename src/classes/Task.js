class Task {
  static ID = 1;
  constructor(name, description, status) {
    this.id = Task.getId();
    this.name = name;
    this.description = description;
    this.status = status;
  }
  static getId() {
    return Task.ID++;
  }
}

export default Task;
