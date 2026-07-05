import { useEffect, useState } from "react";
import { updateTodo } from "../api/todoApi";

const EditModal = ({ todo, isOpen, onClose, fetchTodos }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (todo) {
            setTitle(todo.title);
            setDescription(todo.description);
        }
    }, [todo]);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim() || !description.trim()) {
            return alert("Both fields are required.");
        }

        try {
            await updateTodo(todo._id, {
                title,
                description,
            });

            fetchTodos();
            onClose();

        } catch (err) {
            alert(err.response?.data?.message || "Failed to update todo");
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6">

                <h2 className="text-2xl font-bold mb-6">
                    Edit Todo
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <div>

                        <label className="block mb-2 font-medium">
                            Title
                        </label>

                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">
                            Description
                        </label>

                        <textarea
                            rows="4"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                    </div>

                    <div className="flex justify-end gap-4">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                        >
                            Save
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default EditModal;