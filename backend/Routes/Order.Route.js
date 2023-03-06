const express = require("express");
const { userAuthentication } = require("../Middlewares/User.authentication");
const { CartModel } = require("../Models/Cart.Model");
const { OrderModel } = require("../Models/Order.Model");
const OrderRouter = express.Router();

OrderRouter.post("/add", userAuthentication, async (req, res) => {
  //   const productId = req.params.id;
  const { userID } = req.body;

  try {
    let orderedData = await OrderModel.insertMany(req.body);
    await CartModel.deleteMany({ userID });
    res
      .status(200)
      .send({
        message: "Your Order is Placed Successfully",
        products: orderedData,
      });
  } catch (e) {
    return res
      .status(400)
      .send({
        message: "Some Error in getting the Cartdata",
        error: e.message,
      });
  }
});

OrderRouter.get("/", userAuthentication, async (req, res) => {
  const { userID } = req.body;

  try {
    await OrderModel.find({ userID })
      .populate("order")
      .then((r) => {
        return res.status(200).send({ cartData: r });
      });
  } catch (e) {
    return res
      .status(400)
      .send({
        message: "Some Error in getting the Cartdata",
        error: e.message,
      });
  }
});

module.exports = { OrderRouter };
