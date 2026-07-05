import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

import { deleteTodo, updateTodo } from "../api/todoApi";
import EditModal from "./EditModal";

const TodoItem = ({ todo, fetchTodos }) => {
    const [openModal, setOpenModal] = useState(false);

    const handleDelete = async () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this todo?"
        );

        if (!confirmDelete) return;

        try {
            await deleteTodo(todo._id);
            fetchTodos();
        } catch (err) {
            alert(err.response?.data?.message || "Delete failed");
        }
    };

    const handleToggle = async () => {
        try {
            await updateTodo(todo._id, {
                completed: !todo.completed,
            });

            fetchTodos();
        } catch (err) {
            alert(err.response?.data?.message || "Update failed");
        }
    };

    return (
        <>
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex justify-between items-start">

                <div className="flex gap-4">

                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={handleToggle}
                        className="mt-1 w-5 h-5 accent-blue-600 cursor-pointer"
                    />

                    <div>
                        <h3
                            className={`text-xl font-semibold ${
                                todo.completed
                                    ? "line-through text-gray-400"
                                    : ""
                            }`}
                        >
                            {todo.title}
                        </h3>

                        <p
                            className={`mt-2 ${
                                todo.completed
                                    ? "line-through text-gray-400"
                                    : "text-gray-600"
                            }`}
                        >
                            {todo.description}
                        </p>
                    </div>

                </div>

                <div className="flex gap-3">

                    <button
                        onClick={() => setOpenModal(true)}
                        className="bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-200 transition"
                    >
                        <FaEdit />
                    </button>

                    <button
                        onClick={handleDelete}
                        className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition"
                    >
                        <FaTrash />
                    </button>

                </div>

            </div>

            <EditModal
                todo={todo}
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                fetchTodos={fetchTodos}
            />
        </>
    );
};

export default TodoItem;