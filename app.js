const express = require("express");
const cors = require("cors");
const compression = require("compression");

const routes = require("./routes");
const errorHandler = require("./core/middlewares/errorHandler");

const app = express();

// Global Middlewares

app.use(cors()); 
app.use(express.json({ limit: "10mb" }));
app.use(compression());
app.use(errorHandler);

// API Routes
app.use("/api", routes);


module.exports = app;