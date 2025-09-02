require("dotenv").config();
const express = require("express");
const { connectDB } = require("./db");
const applyMiddleware = require("./middleware");

const app = express();
applyMiddleware(app);

app.get("/health", (req, res) => {
  res.status(200).json({
    health: "OK",
    user: req.user,
  });
});

app.use((err, _req, res, next) => {
  // TODO: format error
  console.log(err);
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

// connect Database
const main = async () => {
  try {
    await connectDB();
    app.listen(4000, () => {
      console.log("Server is listening on port 4000");
    });
  } catch (error) {
    console.log("Database Error");
    console.log(error);
  }
};

main();

module.exports = app;
