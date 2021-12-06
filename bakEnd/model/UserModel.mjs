import sequelize from "../util/DataBase.mjs";
import userSchema from "../schema/UserSchema.mjs";

const User = sequelize.define("user", userSchema);

export default User;