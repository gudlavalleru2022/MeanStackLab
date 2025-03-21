const fs = require("fs");

// STEP 1: Reading JSON file asynchronously
fs.readFile("users.json", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }

  // Parse the JSON data
  let users = JSON.parse(data);

  // STEP 2: Defining new user
  let user = {
    name: "New User",
    age: 30,
    language: ["PHP", "Go", "JavaScript"]
  };

  // Adding new data to users object
  users.push(user);

  // STEP 3: Writing to the file
  fs.writeFile("users.json", JSON.stringify(users, null, 2), err => {
    if (err) {
      console.log("Error writing file:", err);
      return;
    }
    console.log("Done writing");
  });
});
