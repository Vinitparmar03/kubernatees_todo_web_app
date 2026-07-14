import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import healthRoutes from './routes/health.routes.js'
import DBConnection from "./dbs/connectDB.js";
import todoRoutes from "./routes/todo.routes.js"
import register, {
    httpRequestCounter,
    httpRequestDuration
} from "./metrics/metrics.js";
dotenv.config();

DBConnection();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000



app.use((req, res, next) => {

    if (req.path === "/metrics") {
        return next();
    }

    const end = httpRequestDuration.startTimer();

    res.on("finish", () => {
        const route = req.path;

        httpRequestCounter.inc({
            method: req.method,
            route,
            status: res.statusCode,
        });

        end({
            method: req.method,
            route,
            status: res.statusCode,
        });
    });

    next();
});

app.use('/api/v1/health', healthRoutes)
app.use("/api/v1/todos", todoRoutes);

app.get("/metrics", async (req, res) => {

    res.set("Content-Type", register.contentType);

    res.end(await register.metrics());

});

app.listen(PORT, () => {
    console.log('Server running on port ', PORT)
})