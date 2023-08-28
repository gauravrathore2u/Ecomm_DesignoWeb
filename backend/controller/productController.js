const productModel = require("../model/productModel.js");

//get all products
exports.allProduct = async (req, resp) => {
  try {
    const queryObj = { ...req.query };
    const excludeFields = ["sort", "page", "limit"];
    excludeFields.forEach((element) => delete queryObj[element]);

    //filtering of data according to category
    const query = productModel.find(queryObj);

    //sorting of data
    if (req.query.sort) {
      query.sort(req.query.sort);
    } else {
      query.sort("price");
    //   query.sort({"price":-1});  //for decreasing order
    }

    //Pagination
    if (req.query.page || req.query.limit) {
      const page = req.query.page;
      const limit = req.query.limit; //how many documents have to show
      const skip = (page - 1) * limit; //how many documents have to skip
      const noOfDoc = await productModel.countDocuments(); //no. of documents in collection
      if (skip >= noOfDoc) {
        throw new Error("This page does not exist");
      }
      query.skip(skip).limit(limit);
    }

    const products = await query;
    resp.status(200).json({
      status: "success",
      message: "all products",
      data: products,
    });
  } catch (error) {
    resp.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

// get single product
exports.oneProduct = async (req, resp) => {
  try {
    const products = await productModel.findOne({ _id: req.params.id });
    resp.status(200).json({
      status: "success",
      message: "single products",
      data: products._doc,
    });
  } catch (error) {
    resp.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

//add product by admin only
exports.addProduct = async (req, resp) => {
  try {
    if (req.body.isAdmin) {
        // delete req.body.isAdmin;   //no need it will not insert isAdmin as it is not in model
      const prod = await productModel.create(req.body);
      resp.status(201).json({
        status: "success",
        message: "Product added successfully",
        data: prod._doc,
      });
    }
  } catch (error) {
    resp.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

//update product by admin only
exports.updateProduct = async (req, resp) => {
  try {
    if (req.body.isAdmin) {
      const prod = await productModel.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      resp.status(201).json({
        status: "success",
        message: "Product updated successfully",
        data: prod,
      });
    }
  } catch (error) {
    resp.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

//delete product by admin
exports.deleteProduct = async (req, resp) => {
  try {
    if (req.body.isAdmin) {
      const prod = await productModel.deleteOne({ _id: req.params.id });
      resp.status(200).json({
        status: "success",
        message: "Product deleted successfully",
        data: prod,
      });
    }
  } catch (error) {
    resp.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
