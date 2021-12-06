import express from "express";

import {
  getPosts,
  getPost,
  deletePost,
  updatePost,
  addPost,
} from "../controller/PostController.mjs";

const postRouter = express.Router();

postRouter.get("/post", async (req, res) => {
  const response = await getPosts();
  res.send(response);
});

postRouter.get("/post/:id", async (req, res) => {
  const id = req.params.id;
  const response = await getPost(id);
  res.send(response);
});

postRouter.post("/post", async (req, res) => {
  const postInfo = {
    title: req.body.title,
    body: req.body.body,
    userId: req.body.userId,
  };
  const response = await addPost(postInfo);
  res.send(response);
});
postRouter.put("/post/:id", async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const body = req.body.body;
  const response = await updatePost(id, title, body);
  res.send(response);
});

postRouter.delete("/post/:id", async (req, res) => {
  const postId = req.params.id;
  const response = await deletePost(postId);
  res.send(response);
});

export default postRouter;
