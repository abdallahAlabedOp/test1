import {findComments,findComment,createComment,commentUpdate,commentDelete} from '../repository/CommentRepository.mjs';

export const getComments = async () => {
  const data = await findComments();
  return data;
};

export const getComment = async (id) => {
  const data = await findComment(id);
  if (data) {
    return data;
  } else {
    return "comment not found";
  }
};

export const addComment = async (commentInfo) => {
   const data = await createComment(commentInfo);
 return "comment has been added";
};

export const updateComment = async (id,name,body) =>   commentUpdate(id,name,body);


export const deleteComment = async (commentId) => {
  const data = await commentDelete(commentId);
  if (data) {
    return ("comment has been deleted");
  } else {
    return ("comment not found");
  }
};
