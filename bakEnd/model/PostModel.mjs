import sequelize from "../util/DataBase.mjs";
import postSchema from "../schema/PostSchema.mjs";

const Post =  sequelize.define("post", postSchema);

export default Post;
