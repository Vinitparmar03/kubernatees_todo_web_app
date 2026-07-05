import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import healthRoutes from './routes/health.routes.js'
import DBConnection from "./dbs/connectDB.js";
import todoRoutes from "./routes/todo.routes.js"
dotenv.config();

DBConnection();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000


app.use('/api/v1/health', healthRoutes)
app.use("/api/v1/todos", todoRoutes);

app.listen(PORT, () => {
    console.log('Server running on port ', PORT)
})