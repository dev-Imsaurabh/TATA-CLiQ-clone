const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const { userAuthentication } = require("../Middlewares/User.authentication");
const { UserModel } = require("../Models/User.Model");
const UserRouter = express.Router();

UserRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const user = await UserModel.find({ email });
  if (user.length === 0) {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.status(400).send({ message: "Something Went Wrong" });
      } else {
        try {
          const newUser = new UserModel({
            name,
            email,
            password: hash,
          });
          await newUser.save();
          res.status(200).send({ message: "User Registration Suceessful" });
        } catch (e) {
          res.status(201).send({ message: "Something Went Wrong" });
        }
      }
    });
  } else {
    res.status(200).send({ message: "User already exist, Please login" });
  }
});

UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.find({ email });

  if (user.length > 0) {
    bcrypt.compare(password, user[0].password, async (err, result) => {
      if (result) {
        try {
          const token = jwt.sign(
            { userID: user[0]._id },
            process.env.userSecretKey
          );
          res.status(200).send({ message: "Login Suceessful", token: token });
        } catch (e) {
          res.status(400).send({ message: "Wrong Credentials", err: e.message });
        }
      } else {
        res
          .status(201)
          .send({ message: "Something Went Wrong", error: "Wrong Password" });
      }
    });
  } else {
    res
      .status(200)
      .send({ message: "User is not registered,Please register first" });
  }
});

UserRouter.get("/user", async (req, res) => {
  const { userID } = req.body;
  // console.log(userID);
  if(userID){
    try {
      const user = await UserModel.findOne({ _id: userID });
      res.status(200).send({ message: "User Details", user: user });
    } catch (e) {
      res
        .status(200)
        .send({ message: "User is not authenticated,Please login first" });
    }
    
  }
  try {
    const user = await UserModel.find();
    res.status(200).send({ message: "User Details", user: user });
  } catch (e) {
    res
      .status(200)
      .send({ message: "User is not authenticated,Please login first" });
  }
});

module.exports = { UserRouter };
