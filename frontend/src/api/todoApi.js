import api from "./axios.js"


export const getTodos = async() => {
    return await api.get("/todos")
} 
export const getTodo = async(id) => {
    return api.get(`/todos/${id}`)
}

export const createTodo = async (data) => {
    console.log(data)
    console.log("hello: ", import.meta.env.VITE_API_URL)
    return await api.post("/todos", data);
};

export const updateTodo = async (id, data) => {
    return await api.put(`/todos/${id}`, data);
};


export const deleteTodo = async (id) => {
    return await api.delete(`/todos/${id}`);
};

