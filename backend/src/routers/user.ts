import express from "express";
import {
  CreateUser,
  deleteUserById,
  findUsers,
  updateUserById,
} from "../controllers/user";

export const CreateUserRouter = express.Router();
CreateUserRouter.post("/", CreateUser as any)
  .get("/", findUsers as any)
  .put("/:id", updateUserById as any)
  .delete("/:id", deleteUserById as any);
