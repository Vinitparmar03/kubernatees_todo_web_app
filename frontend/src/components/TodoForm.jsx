import { useState } from "react"
import { createTodo } from "../api/todoApi"

const TodoForm = ({fetchTodos}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(import.meta.env.VITE_API_URL);
        
        
        if (!title.trim() || !description.trim()) {
            alert("Please fill all fields");
            return;
        }
        
        try{
            await createTodo({title, description});
            setTitle("")
            setDescription("")
            
            fetchTodos()
        }catch(e){
            console.log(error.response?.data?.message || "Something went wrong");
        }
    }

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-5">
                Create Todo
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}> 
                <div >
                    <label className="block mb-2 font-medium">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter title"
                        className="w-full border-2 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:border-2"
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
                        placeholder="Enter description"
                        className="w-full border-2 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:border-2"
                    />
                </div>

                <button
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default TodoForm