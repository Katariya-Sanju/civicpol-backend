const express = require("express");
const app = express();

// Render gives a PORT value automatically
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});