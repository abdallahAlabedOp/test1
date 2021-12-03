import Post from "../model/PostModel.mjs";

export const findPosts = async () => Post.findAll({ raw: true });

export const findPost = async (id) => Post.findByPk(id);

export const createPost = async (postInfo) => Post.create(postInfo);

export const postUpdate = async (id, title, body) => {
  const data = await Post.findByPk(id);
  if (data) {
    data.title = title;
    data.body = body;
    await data.save();
    return data;
  } else {
    return "post not found";
  }
};

export const postDelete = async (postId) =>
  Post.destroy({ where: { id: postId } });
