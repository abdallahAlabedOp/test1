import express from "express";
import {
  getComments,
  getComment,
  addComment,
  deleteComment,
  updateComment,
} from "../controller/CommentController.mjs";

const commentRouter = express.Router();

commentRouter.get("/comment", async (req, res) => {
  const response = await getComments();
  res.send(response);
});

commentRouter.get("/comment/:id", async (req, res) => {
  const id = req.params.id;
  const response = await getComment(id);
  res.send(response);
});

commentRouter.post("/comment", async (req, res) => {
  const commentInfo = {
    name: req.body.name,
    body: req.body.body,
    postId: req.body.postId,
    userId: req.body.userId,
  };
  const response = await addComment(commentInfo);
  res.send(response);
});

commentRouter.put("/comment/:id",async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const body = req.body.body;
  const response = await updateComment(id,name,body);
  res.send(response);
});

commentRouter.delete("/comment/:id", async (req, res) => {
  const id = req.params.id;
  const response = await deleteComment(id);
  res.send(response);
});

export default commentRouter;
