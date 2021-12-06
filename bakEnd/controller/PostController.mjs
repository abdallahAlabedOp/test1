import {
  findPosts,
  findPost,
  createPost,
  postUpdate,
  postDelete,
} from "../repository/PostRepository.mjs";

export const getPosts = async () => {
  const data = await findPosts();
  return data;
};

export const getPost = async (id) => {
  const data = await findPost(id);
  if (data) {
    return data;
  } else {
    return "post not found";
  }
};

export const addPost = async (postInfo) => {
  await createPost(postInfo);
  return "post has been added";
};

export const updatePost = async (id, title, body) =>  postUpdate(id, title, body);

export const deletePost = async (postId) => {
  const data = await postDelete(postId);
  if (data) {
    return "post has been deleted";
  } else {
    return "post not found";
  }
};
