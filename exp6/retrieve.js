const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/demo")
    .then(() => console.log("Database connected"))
    .catch((error) => console.log("Error:", error));

const demo123 = new mongoose.Schema({
    name: String,
    ID: Number,
    address: String,
});

const CustomerData = mongoose.model("demo1", demo123);

const CustomerDisplay = async () => {
    try {
        const r = await CustomerData.find();
        console.log(r);
    } catch (error) {
        console.log("Error retrieving data:", error);
    }
};

CustomerDisplay();
