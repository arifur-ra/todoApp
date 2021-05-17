import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    await (
      await fetch("http://localhost:3004/todo")
    )
      .json()
      .then((json) => setTodos(json.info))
      .catch((err) => console.log(err));
    // const req = await fetch("http://localhost:3004/todo");
    // const json = req.json();
    //setTodos(json.info);
    // console.log(json.info);
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <>
      <div className="container">
        <h1>Todo App</h1>
        <div className="todo-form">
          <TodoForm todos={todos} setTodos={setTodos} />
        </div>
        <div className="todo-list">
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
};
export default App;
