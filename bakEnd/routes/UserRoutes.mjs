import express from "express";

import {
  getUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controller/UserController.mjs";

const userRouter = express.Router();

userRouter.get("/user", async (req, res) => {
  const response = await getUsers();
  return res.send(response);
});

userRouter.get("/user/:id", async (req, res) => {
  const response = await getUser(req.params.id);
  return res.send(response);
});

userRouter.post("/user", async (req, res) => {
  const userInfo = {
    name: req.body.name,
    email: req.body.email,
  };
  const response = await addUser(userInfo);
  res.send(response);
});

userRouter.delete("/user/:id", async (req, res) => {
  const id = req.params.id;
  const response = await deleteUser(id);
  res.send(response);
});

userRouter.put("/user/:id", async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const email = req.body.email;
  const response = await updateUser(id, name, email);
  res.send(response);
});

export default userRouter;
