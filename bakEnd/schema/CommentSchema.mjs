import Sequelize from "sequelize";

const commentSchema = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
  },
  body: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
  },
  postId: {
    type: Sequelize.INTEGER,
    reference: { key: "id", model: "posts" },
  },
  userId: {
    type: Sequelize.INTEGER,
    reference: { key: "id", model: "users" },
  },
};

export default commentSchema;
