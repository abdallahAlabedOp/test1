import express from 'express';
import UserController from './controller/UserController.mjs';
import PostController from './controller/PostController.mjs';
import CommentController from './controller/CommentController.mjs';
import Sequelize from 'sequelize'
import dotenv from "dotenv";
import User from "./model/UserModel.mjs"
dotenv.config();
const port = process.env.PORT || 5001;
const app = express();
app.use(express.json());

const commentController = new CommentController(); 
const postController = new PostController();
const userController = new UserController();

app.get("/users",userController.getDocument);


const sequelizeDB = new Sequelize({
    database:process.env.DB_NAME,
    username:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DILECT,
    });  
      
    // con
sequelizeDB
.authenticate()
.then(() => {
    app.listen(port,()=> console.log("hello!!",port));
    // user.sync({force: true}).then(function () {
    //     // Table created
    //     return user.create({
    //         name: 'John',
    //         username: 'Hancock',
    //         email:"John@mail.com"
    //     });
    //   });
    
})
.catch((err) => {
  console.log(err);
});





// app.get("/user/:id",getUser);
// app.post("/user",addUser);
// app.put("/user/:id",updateUser);
// app.delete("/user/:id",deleteUser);

// app.get("/posts",getPosts);
// app.get("/post/:id",getPost);
// app.post("/post",addPost);
// app.put("/post/:id",updatePost);
// app.delete("/post/:id",deletePost);

// app.get("/comments",getComments);
// app.get("/comment/:id",getComment);
// app.post("/comment",addComment);
// app.put("/comment/:id",updateComment);
// app.delete("/comment/:id",deleteComment);
