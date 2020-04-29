const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

const connectDB = require("./config/dbconnect");

dotenv.config({ path: "./config/config.env" });

connectDB();

const alltransactions = require("./routes/alltransactions");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/alltransactions", alltransactions);

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow
  )
);
