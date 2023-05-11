import User from "../models/User.js";

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

const getSingleUser = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const createUser = async (payload) => {
  try {
    const user = new User(payload);
    await user.save();
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteUser = async (id) => {
  try {
    await User.deleteOne({ _id: id });
    return;
  } catch (error) {
    throw new Error(error);
  }
};

const updateUser = async (id, payload) => {
  try {
    const user = await User.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

export default {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
};
