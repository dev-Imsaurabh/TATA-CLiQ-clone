const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    images: { type: [String], required: true },
    name: { type: String, required: true },
    short_desc: { type: String, required: true },
    long_desc: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    strike_price: { type: Number, required: true },
    ratings: { type: Number, required: true },
    color: { type: String, required: true },
    delivery_time: { type: Number, required: true },
    size: { type: Boolean, required: true },
    sizes: { type: [String], required: true },
    id: { type: String, required: true },
  },
  {
    versionKey: false
  }
);

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
