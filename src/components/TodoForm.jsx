import Button from "@material-ui/core/Button";
import { useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [input, setInput] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const req = await fetch("http://localhost:3004/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: input }),
    });
    const json = await req.json();
    setTodos([...todos, json.info]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo"></label>
      <input
        type="text"
        name="todo"
        placeholder="Write your Item..........."
        onChange={(e) => setInput(e.target.value)}
      />
      {/* <button type="submit">Add Item</button> */}
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        className="button"
      >
        Add Item
      </Button>
    </form>
  );
};
export default TodoForm;
