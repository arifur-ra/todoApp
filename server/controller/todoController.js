const Todo = require("../models/todoModel");

// Creating the Todo List
const createTodo = async (req, res) => {
  const { todo } = req.body;

  try {
    const newTodo = await Todo.create({ todo });
    res.status(201).json({ message: "Todo added successfully", info: newTodo });
  } catch (err) {
    res.status(404).json({ message: "Something is Wrong", error: err });
  }
};

// Deleting the Todo List
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const delTodo = await Todo.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: " Todo deleted successfully", info: delTodo });
  } catch (err) {
    res.status(500).json({ message: "Something is Wrong", error: err });
  }
};

//Getting  the Todo List

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res
      .status(200)
      .json({ message: " Todo found and fetched successfully", info: todos });
  } catch (err) {
    res.status(500).json({ message: "Something is Wrong", error: err });
  }
};

module.exports = { createTodo, deleteTodo, getTodos };
