import express from "express";
import usersController from "./controllers/users.js";
const router = express.Router();
router.get("/api/users", usersController.getAllUsers);
router.get("/api/users/:id", usersController.getSingleUser);
router.post("/api/users/", usersController.createUser);
router.put("/api/users/:id", usersController.updateUser);
router.delete("/api/users/:id", usersController.deleteUser);
export default router;
//# sourceMappingURL=router.js.map