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

const customers = [
    { name: "Jayesh", ID: 123, address: "Visipansad" },
    { name: "Guddan", ID: 124, address: "Guntur" },
    { name: "Divyansh", ID: 125, address: "Guntur" },
    { name: "Anand", ID: 126, address: "Visipansad" }
];

CustomerData.insertMany(customers)
    .then(() => console.log("Data Inserted successfully"))
    .catch(err => console.log("Error inserting data:", err));
