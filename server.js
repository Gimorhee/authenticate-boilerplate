const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => {
  res.send("HOME ROUTE");
});

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
const user = require("./routes/users");
const auth = require("./routes/auth");

app.use("/api/users", user);
app.use("/api/auth", auth);

// Run server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
