import mongoose from "mongoose";

const livenessCheck = (req, res) => {
    return res.status(200).json({
        success: true,
        status: "ALIVE",
        message: "Application is running",
        timestamp: new Date().toISOString()
    });
};

const readinessCheck = (req, res) => {
    if (mongoose.connection.readyState === 1) {
        return res.status(200).json({
            success: true,
            status: "READY",
            message: "Application is ready to receive traffic",
            database: "Connected",
            timestamp: new Date().toISOString()
        });
    }

    return res.status(503).json({
        success: false,
        status: "NOT_READY",
        message: "Application is not ready",
        database: "Disconnected",
        timestamp: new Date().toISOString()
    });
};

export {
    livenessCheck,
    readinessCheck
};