const express = require("express");
const { userAuthentication } = require("../Middlewares/User.authentication");
const { CartModel } = require("../Models/Cart.Model");
const CartRouter = express.Router();

CartRouter.get("/", userAuthentication, async (req, res) => {
  const { userID } = req.body;

  try {
    await CartModel.find({ userID })
      .populate("productId")
      .then((r) => {
        return res.status(200).send({ cartData: r });
      });
  } catch (e) {
    return res
      .status(400)
      .send({ message: "Some Error in getting the Cartdata", error: e.message });
  }
});

CartRouter.post("/add/:id", userAuthentication, async (req, res) => {
  const productId = req.params.id;
  let { userID } = req.body;

  try {
    let existingProduct = await CartModel.findOne({ productId, userID });

    if (existingProduct) {
      let qty = parseFloat(existingProduct.qty + 1);
      //  let cartItem= await CartModel.findOneAndUpdate({productId,userID,qty})
      let cartItem = new CartModel({ productId, userID, qty });
      await cartItem.save();
      await CartModel.findOneAndDelete({ productId, userID });
      return res
        .status(200)
        .send({ message: "Product added to Cart", cartItem: cartItem });
    } else {
      let qty = 1;
      let cartItem = new CartModel({ productId, userID, qty });
      await cartItem.save();
      return res
        .status(200)
        .send({ message: "Product added to Cart", cartItem: cartItem });
    }
  } catch (e) {
    return res
      .status(400)
      .send({ message: "Error in adding Product to Cart", error: e.message });
  }
});

CartRouter.patch("/update/:id", userAuthentication, async (req, res) => {
  const _id = req.params.id;
  const payload = req.body;
  try {
    await CartModel.findByIdAndUpdate({ _id }, payload);
    res.status(200).send({ message: "Product Quantity updated" });
  } catch (e) {
    return res
      .status(400)
      .send({ message: "Error in Quantity updation", error: e.message });
  }
});

CartRouter.delete("/delete/:id", userAuthentication, async (req, res) => {
  const _id = req.params.id;
  try {
    await CartModel.findByIdAndDelete({ _id });
    res.send({ message: "Product removed from cart" });
  } catch (e) {
    return res
      .status(400)
      .send({
        message: "Error in removing product from cart",
        error: e.message,
      });
  }
});

module.exports = { CartRouter };
