const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/demo")
    .then(() => console.log("Database connected"))
    .catch(err => console.log("Error:", err));

const demo123 = new mongoose.Schema({
    name: String,
    ID: Number,
    address: String,
});

const CustomerData = mongoose.model("demo1", demo123);

console.log("Collection created");
