import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import axios from "axios";

const Comment = (props) => {
  const [comments, setComment] = useState([]);
  const api = "https://jsonplaceholder.typicode.com/comments";
  const commentDisp = comments.map((commnt, index) => {
    return (
      props.showComment && (
        <Container data-testid="comments" key={commnt.id}
          component={'span'}>
          <Typography
            key={index + "e"}
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
            component={'span'}
          >
            {commnt.email}
          </Typography>
          <Typography
            key={index + "b"}
            className={"MuiTypography--subheading"}
            variant={"caption"}
          // component={'span'} 
          >
            {commnt.body}
          </Typography>
        </Container>

      )
    );
  });
  const commentInfo = (arr) => {
    setComment(arr);
  };
  useEffect(async () => {
    const response = await axios.get(api);
    const arr = response.data.filter((comment) => {
      if (comment.postId === props.postId) return comment;
    });
    commentInfo(arr);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return commentDisp
}
export default Comment;