import asyncHandler from "express-async-handler";
import UsersService from "../services/users.js";
const getAllUsersHandler = asyncHandler(async (req, res, next) => {
    try {
        const users = await UsersService.getAllUsers();
        res.status(200).json({ users });
    }
    catch (error) {
        res.status(500);
        next(error);
    }
});
const getSingleUserHandler = asyncHandler(async (req, res, next) => {
    try {
        const user = await UsersService.getSingleUser(req.params.id);
        if (!user) {
            res.status(404);
            throw new Error("user not found");
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500);
        next(error);
    }
});
const createUserHandler = asyncHandler(async (req, res, next) => {
    try {
        if (!req.body.email || !req.body.password || !req.body.name) {
            res.status(400);
            throw new Error("name, email, and password are required");
        }
        const user = await UsersService.createUser(req.body);
        res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
});
const updateUserHandler = asyncHandler(async (req, res) => {
    try {
        const existingUser = await UsersService.getSingleUser(req.params.id);
        if (!existingUser) {
            res.status(404);
            throw new Error("user not found");
        }
        const user = await UsersService.updateUser(req.params.id, req.body);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
const deleteUserHandler = asyncHandler(async (req, res, next) => {
    try {
        const user = await UsersService.getSingleUser(req.params.id);
        if (!user) {
            res.status(404);
            throw new Error("user not found");
        }
        await UsersService.deleteUser(req.params.id);
        res.status(200).json({});
    }
    catch (error) {
        next(error);
    }
});
export default {
    getAllUsersHandler,
    getSingleUserHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler,
};
//# sourceMappingURL=users.js.map