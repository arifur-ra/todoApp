const router = require("express").Router();
const {
  createTodo,
  deleteTodo,
  getTodos,
} = require("../controller/todoController.js");

router.post("/", createTodo);
router.delete("/:id", deleteTodo);
router.get("/", getTodos);

module.exports = router;
