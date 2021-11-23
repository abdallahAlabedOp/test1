import React, { useEffect, useState, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { UserContext } from "../contexats/UserContexts.jsx";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";
import Comment from "./Comment.jsx";
import { Container } from "@material-ui/core";
const axios = require("axios");


function Home() {
  const navigate = useNavigate();
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
  const userInfo = (id, name) => {
    userData.setUserId(id);
    userData.setUserName(name);
    userData.setIsLogedIn(!userData.isLogedIn);
    if (userData.isLogedIn) userData.setEmail("");
    navigate('/')

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
  }, []);

  const postdis = posts.map((post, i) => {
    return (
      <Card key={post.id} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://play-lh.googleusercontent.com/FCzgw2YD80puDhwEAOsjYCZcbetxOu5CRx7VzEVJ0z1C_FjyHqOefGqkrijyLD_cHbx1"
            alt="green iguana"
          />
          <CardContent alignCenter align="center">
            <Typography
              gutterBottom
              variant="h5"
              align="center"
              noWrap
              component="div"
            >
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.body}
            </Typography>
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
        </CardActionArea>
      </Card>
    );
  });

  return (
    <Container>
        <div>
          <Button
            key="1"
            variant="contained"
            onClick={() => {
              userData.setIsLogedIn(!userData.isLogedIn);
              userInfo(-1, "");
            }}
          >
            Logout
          </Button>
        </div>
     
        {postdis}

    </Container>
  );
}

export default Home;
