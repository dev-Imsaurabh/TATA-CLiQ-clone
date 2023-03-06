const express = require("express");
const { adminAuthentication } = require("../Middlewares/Admin.authentication");
const { ProductModel } = require("../Models/Product.Model");

const ProductRouter = express.Router();

//Add Product from admin side
ProductRouter.post("/add", adminAuthentication, async (req, res) => {
  try {
    const product = new ProductModel(req.body);
    await product.save();

    res.status(200).send({ message: "Product Added", product: product });
  } catch (e) {
    res.status(400).send({ message: "Request failed", error: e.message });
  }
});

//Get Products
ProductRouter.get("/", async (req, res) => {
  const products = await ProductModel.find();
  res.status(200).send({ products: products });
});

ProductRouter.get("/:category", async (req, res) => {
  const category = req.params.category;
  const products = await ProductModel.find({ category: category });
  res.status(200).send({ products: products });
});

ProductRouter.get("/:category/:id", async (req, res) => {
  //   const category = req.params.category;
  const id = req.params.id;
  const product = await ProductModel.findById(id);
  res.status(200).send({ product: product });
});

//Update Product from admin side
ProductRouter.patch("/:id", adminAuthentication, async (req, res) => {
  //   const category = req.params.category;
  const payload = req.body;
  const ID = req.params.id;
  try {
    const product = await ProductModel.findByIdAndUpdate({ _id: ID }, payload);
    res.status(200).send({ product: product });
  } catch (e) {
    res.status(400).send({ message: "Request failed", error: e.message });
  }
});

//Delete Product from admin side

ProductRouter.delete("/:id", adminAuthentication, async (req, res) => {
  const ID = req.params.id;
  console.log(ID);
  try {
    const product = await ProductModel.findByIdAndDelete({ _id: ID });
    res.status(200).send({ message: "Product deleted", product: product });
  } catch (e) {
    res.status(400).send({ message: "Request failed", error: e.message });
  }
});

module.exports = { ProductRouter };
