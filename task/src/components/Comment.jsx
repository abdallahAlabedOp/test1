import React, { useEffect, useState } from "react";
const axios = require("axios");

function Comment(props) {
  const [comments, setComment] = useState([]);
  const api = "https://jsonplaceholder.typicode.com/comments";
  const commentDisp = comments.map((commnt) => {
    return (
      props.showComment && (
        <div key={commnt.id}>
          <p key={commnt.id}>{commnt.email}</p>
          <p >{commnt.body}</p>
        </div>
      )
    );
  });
  const commentInfo = (arr) => {
    setComment(arr);
  };

  useEffect(() => {
    axios
      .get(api)
      .then(function (response) {
        const arr = response.data.filter((comment) => {
          if (comment.postId === props.postId) {
            return comment;
          }
          return null;
        });
        commentInfo(arr);
      })
      .catch(function () {});
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>{commentDisp}</div>;
}

export default Comment;