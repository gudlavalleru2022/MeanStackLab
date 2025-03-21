var mongoose=require("mongoose");

mongoose.set("strictQuery",false);

mongoose.connect("mongodb://127.0.0.1:27017/demo")
    .then(() =>console.log("Database connected"))
    .catch((Error) =>console.log(Error));
