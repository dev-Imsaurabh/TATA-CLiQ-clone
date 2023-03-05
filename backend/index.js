const express = require("express");
require("dotenv").config();
const { connection } = require("./Configs/db");
const cors = require("cors");
const { AdminRouter } = require("./Routes/Admin.route");
const { CartRouter } = require("./Routes/Cart.Route");
const { ProductRouter } = require("./Routes/Product.Route");
const { UserRouter } = require("./Routes/User.Route");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Api is working");
});

app.use("/products", ProductRouter);
app.use("/admin", AdminRouter);
app.use("/users", UserRouter);
app.use("/cart", CartRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (e) {
    console.log("Not Connected to Database");
  }
  console.log(`Server is running at port ${process.env.port}`);
});
