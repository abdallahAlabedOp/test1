import sequelize from "../util/DataBase.mjs";
import commentSchema from "../schema/CommentSchema.mjs";

const Comment = sequelize.define("comment", commentSchema);

export default Comment;