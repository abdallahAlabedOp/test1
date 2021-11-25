import React, { useEffect, useState, useContext } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import { UserContext } from "../contexats/UserContexts.jsx";
import Typography from "@mui/material/Typography";
import { CardActions, Button } from "@mui/material";
import Comment from "./Comment.jsx";
import { Container } from "@material-ui/core";
const axios = require("axios");

const Home =()=> {
  const userData = useContext(UserContext);
  const [posts, setPost] = useState([]);
  const api = "https://jsonplaceholder.typicode.com/posts";

  const postInfo = (arr) => {
    setPost(arr);
  };

  const showComments = (arr, indx) => {
    arr[indx].flag = !arr[indx].flag;
    setPost([...arr]);
  };

  useEffect(() => {
    axios
      .get(api)
      .then(function (response) {
        const arr = response.data
          .map((post) => {
            if (post.userId === userData.userId) {
              post = { ...post, flag: false };
              return post;
            }
            return null;
          })
          .filter((e) => e !== null);
        postInfo(arr);
      })
      .catch(function (error) {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const postDis = posts.map((post, i) => {
    return (
      <Card style={{marginTop:"8%"}}>
        <CardMedia
          component="img"
          height="140"
          image="https://play-lh.googleusercontent.com/FCzgw2YD80puDhwEAOsjYCZcbetxOu5CRx7VzEVJ0z1C_FjyHqOefGqkrijyLD_cHbx1"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            {post.title}
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            {post.body}
          </Typography>
          <Divider light />
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                showComments(posts, i);
              }}
            >
              Comments
            </Button>
          </CardActions>
          <Typography variant="body2" color="text.secondary">
            <Comment key={post.id} postId={post.id} showComment={post.flag} />
          </Typography>
        </CardContent>
      </Card>
    );
  });
  return (
    <Container>
      {postDis}
    </Container>
  );
}
export default Home;