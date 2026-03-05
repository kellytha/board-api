const express = require("express");
const cors = require("cors");
const compression = require("compression");

const routes = require("./routes");
const errorHandler = require("./core/errors/errorHandler");

const app = express();

// Global Middlewares

app.use(cors()); 
app.use(express.json({ limit: "10mb" }));
app.use(compression());


// API Routes
app.use("/api", routes);

// Global Error Handler
app.use(errorHandler);

module.exports = app;