import TodoItem from "./TodoItem";

const TodoList = ({ todos, fetchTodos }) => {

    if (todos && todos.length === 0) {
    return (
        <div className="bg-white rounded-xl mb-10 shadow-lg p-12 text-center">

            <h2 className="text-2xl font-semibold text-gray-700">
                No Todos Found
            </h2>

            <p className="text-gray-500 mt-2">
                Create a new todo to get started.
            </p>

        </div>
    );
}
    return (
        <div className="space-y-5 mb-10">

            {todos && todos.map((todo) => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    fetchTodos={fetchTodos}
                />
            ))}

        </div>
    );
};

export default TodoList;