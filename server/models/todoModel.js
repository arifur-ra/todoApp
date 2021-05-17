const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    require: true,
  },
});
const Todo = mongoose.model("Todo", todoSchema, "todomern");
module.exports = Todo;
