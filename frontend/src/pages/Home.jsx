import { useEffect, useState } from "react";

import { getTodos } from "../api/todoApi";

import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import Loader from "../components/Loader";

const Home = () => {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    const fetchTodos = async () => {

        setLoading(true);

        try {
            const { data } = await getTodos();

            setTodos(data.data);

        } catch (err) {

            console.error(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const filteredTodos = todos.filter((todo) => {

        const matchesSearch =
            todo.title.toLowerCase().includes(search.toLowerCase()) ||
            todo.description.toLowerCase().includes(search.toLowerCase());

        if (filter === "completed") {
            return matchesSearch && todo.completed;
        }

        if (filter === "pending") {
            return matchesSearch && !todo.completed;
        }

        return matchesSearch;

    });

    return (
        <div className="max-w-6xl mx-auto mt-10 px-6">

            <TodoForm fetchTodos={fetchTodos} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">

                <div className="bg-white rounded-xl shadow p-5">
                    <h3 className="text-gray-500">Total</h3>
                    <p className="text-3xl font-bold">
                        {todos.length}
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-5">
                    <h3 className="text-gray-500">Completed</h3>
                    <p className="text-3xl font-bold text-green-600">
                        {todos.filter(todo => todo.completed).length}
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-5">
                    <h3 className="text-gray-500">Pending</h3>
                    <p className="text-3xl font-bold text-red-600">
                        {todos.filter(todo => !todo.completed).length}
                    </p>
                </div>

            </div>

            <div>

                <h2 className="text-3xl font-bold mb-5">
                    Todos ({todos.length})
                </h2>

                <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">

                    <input
                        type="text"
                        placeholder="Search todos..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border rounded-lg px-4 py-3 w-full md:w-96 focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                    </select>

                </div>

                {loading ? (
                    <Loader />
                ) : (
                    <TodoList
                        todos={filteredTodos}
                        fetchTodos={fetchTodos}
                    />
                )}

            </div>

        </div>
    );
};

export default Home;