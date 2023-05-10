import asyncHandler from "express-async-handler";
import User from "../models/user.js";

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    // const users = await User.find();
    const users = [];
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error });
  }
});

const getSingleUser = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({ message: `get user ${req.params.id}` });
  } catch (error) {
    res.status(500).json({ error });
  }
});

const createUser = asyncHandler(async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.password) {
      res.status(400);
      throw new Error("email, and password are required");
    }
    res.status(200).json({ id: "1" });
  } catch (error) {
    next(error);
  }
});

const updateUser = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({ message: `update user ${req.params.id}` });
  } catch (error) {
    res.status(500).json({ error });
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({ message: `delete user ${req.params.id}` });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
