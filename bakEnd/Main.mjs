import express from 'express';
const app = express();
app.use(express.json());

import dotenv from "dotenv";
dotenv.config();

import userRouter from "./routes/UserRoutes.mjs";
import postRouter from "./routes/PostRoutes.mjs";
import commentRouter from "./routes/CommentRoutes.mjs";

import sequelizeDB from "./util/DataBase.mjs";

import User from "./model/UserModel.mjs"
import Post from "./model/PostModel.mjs";
import Comment from "./model/CommentModel.mjs";

app.use(userRouter);

app.use(postRouter);

app.use(commentRouter);

User.hasMany(Post);
Post.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
Post.hasMany(Comment);
Comment.belongsTo(Post, { constraints: true, onDelete: "CASCADE" });

sequelizeDB
  .sync()
  .then(() => {
    app.listen(process.env.PORT);
  })
  

  export default {app,sequelizeDB} ;