import chai from "chai";
import chaiHttp from "chai-http";
import main from "../Main.mjs";
import User from "../model/UserModel.mjs";
import Post from "../model/PostModel.mjs";
import Comment from "../model/CommentModel.mjs";
import sequelizeDB from "../util/DataBase.mjs";
chai.should();
chai.use(chaiHttp);

describe("App tests", () => {
  beforeEach(async() => {
    await User.destroy({
      where: {},
      truncate: true,
    });
   await Post.destroy({
      where: {},
      truncate: true,
    });
   await Comment.destroy({
      where: {},
      truncate: true,
    });
  });
  before(async () => {
    await sequelizeDB.sync();
  });

  // afterEach =async () => {
   
  // };
  describe("User API tests", () => {
    it("GET USERS API TEST ", async () => {
      const res = await chai.request(main.app).get("/user");
      res.should.have.status(200);
      res.body.should.be.a("array");
      res.body.length.should.be.eq(0);
    });
    it("GET USERS API TEST FAILED ", async () => {
      const res = await chai.request(main.app).get("/user_failed");
      res.should.have.status(404);
    });
    it("GET ONE USER API TEST ", async () => {
      await User.create({ id: 1, name: "abd", email: "abd@rfsd.com" });
      const id = 1;
      const response = await chai.request(main.app).get("/user/" + id);
      response.should.have.status(200);
      response.body.should.be.a("object");
      response.body.should.have.property("name").eq("abd");
      response.body.should.have.property("email").eq("abd@rfsd.com");
    });
    it("GET ONE USER API TEST FAILED ", async () => {
      const id = 1;
      const response = await chai.request(main.app).get("/user/" + id);
      response.should.have.status(200);
      response.text.should.be.eq("user not found");
    });
    it("FAILED TO GET ONE USER API TEST  ", async () => {
      const id = 1;
      const response = await chai.request(main.app).get("/user_failed/" + id);
      response.should.have.status(404);
    });
    it("ADD  USER API TEST ", async () => {
      const user = {
        name: "abdallah",
        email: "abdallha@gmail.com",
      };
      const response = await chai.request(main.app).post("/user").send(user);
      response.should.have.status(200);
      response.text.should.be.eq("user has been added");
    });
    it("UPDATE  USER API TEST ", async () => {
      await User.create({ id: 2, name: "abd", email: "abd@rfsd.com" });
      const user = {
        name: "abdallah",
        email: "abdallha@gmail.com",
      };
      const id = 2;
      const response = await chai
        .request(main.app)
        .put("/user/" + id)
        .send(user);
      response.should.have.status(200);
      response.body.should.be.a("object");
      response.body.should.have.property("name").eq("abdallah");
      response.body.should.have.property("email").eq("abdallha@gmail.com");
    });
    it("UPDATE  USER API TEST USER NOT FOUND ", async () => {
      const user = {
        name: "abdallah",
        email: "abdallha@gmail.com",
      };
      const id = 1;
      const response = await chai
        .request(main.app)
        .put("/user/" + id)
        .send(user);
      response.should.have.status(200);
      response.text.should.be.eq("user not found");
    });
    it("DELETE  USER API TEST ", async () => {
      await User.create({ id: 1, name: "abd", email: "abd@rfsd.com" });
      const id = 1;
      const response = await chai
        .request(main.app)
        .delete("/user/" + id);
      response.should.have.status(200);
      response.text.should.be.eq("user has been deleted");
    });
    it("DELETE  USER API TEST USER NOT FOUND ", async () => {
      const id = 1;
      const response = await chai
        .request(main.app)
        .delete("/user/" + id);
      response.should.have.status(200);
      response.text.should.be.eq("user not found");
    });
    });
    describe("POST API tests", () => {
    it("GET POSTS API TEST ", async () => {
      await User.create({ id: 1, name: "abd", email: "abd@rfsd.com" });
      await Post.create({
        id: 1,
        title: "abdallah",
        body: "abdallha@gmail.com",
        userId: 1,
      });
      const response = await chai.request(main.app).get("/post");
       response.should.have.status(200);
      response.body.should.be.a("array");
      response.body.length.should.be.eq(1);
    });
    it("GET POSTS API TEST FAILED ", async () => {
      const response = await chai.request(main.app).get("/post_failed");
      response.should.have.status(404);
    });
    it("GET ONE POST API TEST ", async () => {
      await User.create({ id: 1, name: "abd", email: "abd@rfsd.com" });
      await Post.create({
        id: 1,
        title: "abdallah",
        body: "abdallha@gmail.com",
        userId: 1,
      });
      const id = 1;
      const response = await chai.request(main.app).get("/post/" + id);
      response.should.have.status(200);
      response.body.should.be.a("object");
      response.body.should.have.property("title").eq("abdallah");
    });
    it("GET ONE POST API TEST NOT FOUND ", async () => {
      const id = 1;
      const response = await chai.request(main.app).get("/post/" + id);
      response.should.have.status(200);
      response.text.should.be.eq("post not found");
    });
    it("ADD  POST API TEST ", async () => {
      await User.create({ id: 1, name: "abd", email: "abd@rfsd.com" });
      const post = {
        title: "abdallah",
        body: "abdallha@gmail.com",
        userId: 1,
      };
      const response = await chai.request(main.app).post("/post").send(post);
      response.should.have.status(200);
      response.text.should.be.eq("post has been added");
    });
    it("UPDATE  POST API TEST ", async () => {
      await User.create({ id: 1, name: "abd", email: "abd@rfsd.com" });
      await Post.create({
        id: 1,
        title: "abdallah",
        body: "abdallha@gmail.com",
        userId: 1,
      });
      const post = {
        title: ".......",
        body: "abdallah",
        userId: 1,
      };
      const id = 1;
      const response = await chai
        .request(main.app)
        .put("/post/" + id)
        .send(post);
      response.should.have.status(200);
      response.body.should.be.a("object");
      response.body.should.have.property("title").eq(".......");
      response.body.should.have.property("body").eq("abdallah");
      response.body.should.have.property("userId").eq(1);
    });
    it("UPDATE  POST API TEST NOT FOUND ", async () => {
      const post = {
        title: "abdallah",
        body: "abdallha@gmail.com",
        userId: 1,
      };
      const id = 1;
      const response = await chai
        .request(main.app)
        .put("/post/" + id)
        .send(post);
      response.should.have.status(200);
      response.text.should.be.eq("post not found");
    });
    it("DELETE  POST API TEST ", async () => {
      await User.create({ id: 1, name: "abd", email: "abd@rfsd.com" });
      await Post.create({
        id: 1,
        title: "abdallah",
        body: "abdallha@gmail.com",
        userId: 1,
      });
      const id = 1;
      const response = await chai
        .request(main.app)
        .delete("/post/" + id);
      response.should.have.status(200);
      response.text.should.be.eq("post has been deleted");
    });
    it("DELETE  POST API TEST NOT FOUND ", async () => {
      const id = 1;
      const response = await chai
        .request(main.app)
        .delete("/post/" + id);
      response.should.have.status(200);
      response.text.should.be.eq("post not found");
    });
    });
    describe("COMMENT API tests", () => {
    it("GET COMMENT API TEST ", async () => {
      await User.create({
        id: 1,
        name: "abd",
        email: "abd@rfsd.com",
      });
       await Post.create({
        id: 1,
        title: "abdallah",
        body: "abdallha@gmail.com",
        userId: 1,
      });
      await Comment.create({
        name: "req",
        body: "req",
        postId: 1,
        userId: 1,
      });
      const response = await chai.request(main.app).get("/comment");
      response.should.have.status(200);
      response.body.should.be.a("array");
      response.body.length.should.be.eq(1);
    });
      it("GET COMMENT API TEST FAILED ", async () => {
        const response = await chai.request(main.app).get("/comment_failed");
        response.should.have.status(404);
      });


    it("GET ONE COMMENT  API TEST ", async () => {
      await User.create({
        id: 1,
        name: "abd",
        email: "abd@rfsd.com",
      });
      await Post.create({
        id: 1,
        title: "abdallah",
        body: "abdallha@gmail.com",
        userId: 1,
      });
      await Comment.create({
        id:1,
        name: "req",
        body: "req",
        postId: 1,
        userId: 1,
      });
      const id = 1;
      const response = await chai.request(main.app).get("/comment/" + id);
      response.should.have.status(200);
      response.body.should.be.a("object");
      response.body.should.have.property("name").eq("req");
    });

    it("GET ONE COMMENT  API TEST NOT FOUND ", async () => {
      const id = 1;
      const response = await chai.request(main.app).get("/comment/" + id);
      response.should.have.status(200);
      response.text.should.be.eq("comment not found");
    });
    it("ADD  COMMENT API TEST ", async () => {
      await User.create({ id: 1, name: "abd", email: "abd@rfsd.com" });
      await Post.create({
        id:1,
        title: "abdallah",
        body: "abdallha@gmail.com",
        userId: 1,
      });
      const comment = {
        name: "req",
        body: "req",
        postId: 1,
        userId: 1,
      };
      const response = await chai
        .request(main.app)
        .post("/comment")
        .send(comment);
      response.should.have.status(200);
      response.text.should.be.eq("comment has been added");
    });
    it("UPDATE  COMMENT API TEST ", async () => {
      await User.create({
        id: 1,
        name: "abd",
        email: "abd@rfsd.com",
      });
      await Post.create({
        id: 1,
        title: "abdallah",
        body: "abdallha@gmail.com",
        userId: 1,
      });
      await Comment.create({
        id:1,
        name: "abdallah",
        body: "alabed",
        postId: 1,
        userId: 1,
      });
      const comment = {
        name: "req",
        body: "req",
        postId: 1,
        userId: 1,
      };
      const id = 1;
      const response = await chai
        .request(main.app)
        .put("/comment/" + id)
        .send(comment);
      response.should.have.status(200);
      response.body.should.be.a("object");
      response.body.should.have.property("name").eq("req");
      response.body.should.have.property("body").eq("req");
    });
    it("UPDATE  COMMENT API TEST NOT FOUND ", async () => {
      const comment = {
        name: "req",
        body: "req",
        postId: 1,
        userId: 1,
      };
      const id = 1;
      const response = await chai
        .request(main.app)
        .put("/comment/" + id)
        .send(comment);
      response.should.have.status(200);
      response.text.should.be.eq("comment not found");
    });
    it("DELETE  COMMENT API TEST ", async () => {
      await User.create({
        id: 1,
        name: "abd",
        email: "abd@rfsd.com",
      });
      await Post.create({
        id: 1,
        title: "abdallah",
        body: "abdallha@gmail.com",
        userId: 1,
      });
      await Comment.create({
        id:1,
        name: "abdallah",
        body: "alabed",
        postId: 1,
        userId: 1,
      });
      const id = 1;
      const response = await chai
        .request(main.app)
        .delete("/comment/" + id);
      response.should.have.status(200);
      response.text.should.be.eq("comment has been deleted");
    });
    it("DELETE  COMMENT API TEST NOT FOUND", async () => {
      const id = 1;
      const response = await chai
        .request(main.app)
        .delete("/comment/" + id);
      response.should.have.status(200);
      response.text.should.be.eq("comment not found");
    });
  });
});
