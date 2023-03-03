const express = require("express");
const { ProductModel } = require("../Models/Product.model");

const ProductRouter = express.Router();

ProductRouter.post("/:category", async (req, res) => {
  try {
    const category = req.params.category;
    console.log(category);
    const product = await ProductModel.find({id:category});
    console.log(product);
    let data=product[0].items.push(new ProductModel(req.body))
    await data.save();
    console.log(data)
    res.status(200).send({ message: "Product Added", data });
  } catch (e) {
    res.status(400).send(e);
  }
});
ProductRouter.get("/", async (req, res) => {
  const products = await ProductModel.find();
  res.status(200).send(products);
});
ProductRouter.get("/:category", async (req, res) => {
  const category = req.params.category;
  console.log(category);
  const products = await ProductModel.find({ id: category });
  res.status(200).send(products);
});

ProductRouter.get("/:category/:id", async (req, res) => {
  const id = req.params.id;
  const category = req.params.category;
  console.log(id, category);
  const products = await ProductModel.find({ id: category });
  const data = products[0].items.filter((el) => el.id === id);
  res.status(200).send(data);
});

module.exports = { ProductRouter };
