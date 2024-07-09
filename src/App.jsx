import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy milk",
      dueDate: "4/10/23",
    },
    {
      name: "Go to work",
      dueDate: "4/10/23",
    },
    {
      name: "Go to Gym",
      dueDate: "4/10/23",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
