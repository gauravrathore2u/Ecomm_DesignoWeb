const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userModel = require("../model/userModel.js");
const saltRounds = 10;

//Singup
exports.userSignUp = async (req, resp) => {
  try {
    const checkUser = await userModel.findOne({ email: req.body.email });
    if (checkUser?.email) {
      return resp.status(200).json({
        status: "success",
        message: "User already exists",
      });
    }

    const user = req.body;
    const hash = bcrypt.hashSync(req.body.password, saltRounds);
    user.password = hash;
    const newUser = await userModel.create(user);

    const token = jwt.sign(
      { email: newUser?.email, isAdmin: newUser?.isAdmin },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );
    delete newUser._doc.password;
    resp.status(201).json({
      status: "success",
      message: "Signed up successfully",
      token,
      data: newUser._doc,
    });
  } catch (error) {
    resp.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

//Login
exports.userLogin = async (req, resp) => {
  try {
    if (!req.body.email || !req.body.password) {
      throw new Error("Please provide Email and Password");
    }

    const user = await userModel
      .findOne({ email: req.body.email })
      .select("+password");
    if (!user) {
      throw new Error("User does not  exists please sign in");
    }
    const passwordCheck = await bcrypt.compare(
      req.body.password,
      user?.password
    );

    if (!user || !passwordCheck) {
      throw new Error("Email or Password is wrong");
    }

    const token = jwt.sign(
      {
        email: user._doc.email,
        isAdmin: user._doc.isAdmin,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    //   let decodedToken = jwt.verify(req.headers.authtoken, process.env.JWT_SECRET)
    //   console.log(decodedToken);

    resp.status(200).json({
      status: "sucess",
      message: "Logged in successfully",
      data: user._doc,
      token,
    });
  } catch (error) {
    resp.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

//get profile
exports.profile = async (req, resp) => {
  try {
    const user = userModel.findOne({ email: req.params.email });
    resp.status(200).json({
      status: "sucess",
      message: "profile",
      data: user._doc,
      token,
    });
  } catch (error) {
    resp.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
