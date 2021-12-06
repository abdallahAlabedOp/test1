import Comment from "../model/CommentModel.mjs";
import Post from "../model/PostModel.mjs";

export const findComments = async () => Comment.findAll({ raw: true });

export const findComment = async (id) => Comment.findByPk(id);

export const createComment = async (commentInfo) => Comment.create(commentInfo);

export const commentUpdate = async (id,name,body) =>{
  const data = await   Comment.findByPk(id);
  if (data) {
    data.name = name;
    data.body = body;
    await data.save();
    return data;
  } else {
    return "comment not found";
  }
}

export const commentDelete = async (commentId) =>  Comment.destroy({ where: { id: commentId} });