const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// example route for reports
app.post("/report", (req, res) => {
  const report = req.body;
  console.log(report);
  res.json({ message: "Report received", data: report });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
