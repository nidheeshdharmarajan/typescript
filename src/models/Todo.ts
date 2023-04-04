class Todo {
  name: string;
  id: string;
  constructor(todoName: string) {
    this.name = todoName;
    this.id = new Date().toISOString();
  }
}
export default Todo;
