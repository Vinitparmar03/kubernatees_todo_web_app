import mongoose from "mongoose";
import Todo from "../models/todo.models.js";

const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        
        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Both fields are required"
            });
        }
        
        const todo = await Todo.create({
            title,
            description
        });

        return res.status(201).json({
            success: true,
            message: "Todo created successfully",
            data: todo
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({});

        return res.status(200).json({
            success: true,
            data: todos,
            message: "Fetched all todos successfully"
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

const getTodoById = async(req, res) => {
     try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid Todo ID",
            });
        }

        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        return res.status(200).json({
            success: true,
            data: todo,
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid Todo ID",
            });
        }

        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            });
        }

        todo.title = title ?? todo.title;
        todo.description = description ?? todo.description;
        todo.completed = completed ?? todo.completed;

        await todo.save();

        return res.status(200).json({
            success: true,
            message: "Todo updated successfully",
            data: todo
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const deleteTodo = async(req, res) => {
    try{
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid Todo ID",
            });
        }

        const todo = await Todo.findByIdAndDelete(id);


        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Todo deleted successfully",
        });

    }catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo
};