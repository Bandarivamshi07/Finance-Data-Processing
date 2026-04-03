const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

// routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/records", require("./routes/record.routes"));
app.use("/api/dashboard", require("./routes/dashboard.routes"));
app.use(require("./middlewares/error.middleware"));

app.get("/", (req, res) => {
  res.json({
    message: "Finance Backend API Running 🚀",
    endpoints: {
      auth: "/api/auth",
      records: "/api/records",
      dashboard: "/api/dashboard"
    }
  });
});

module.exports = app;