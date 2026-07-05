import express from "express";
import { createTodo, deleteTodo, getAllTodos, getTodoById, updateTodo } from "../controllers/todo.controller.js";

const Router = express.Router();

Router.post("/", createTodo)
Router.get("/", getAllTodos)
Router.get("/:id", getTodoById)
Router.put("/:id", updateTodo)
Router.delete("/:id", deleteTodo)

export default Router