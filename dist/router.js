import express from "express";
import usersController from "./controllers/users.js";
const router = express.Router();
router.get("/api/users", usersController.getAllUsersHandler);
router.get("/api/users/:id", usersController.getSingleUserHandler);
router.post("/api/users/", usersController.createUserHandler);
router.put("/api/users/:id", usersController.updateUserHandler);
router.delete("/api/users/:id", usersController.deleteUserHandler);
export default router;
//# sourceMappingURL=router.js.map