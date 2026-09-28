const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const productRoutes = require("./routes/productRoutes");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/products", productRoutes);

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK"
    });
});

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(process.env.PORT, () => {
            console.log(
                `Server running on port ${process.env.PORT}`
            );
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
    });