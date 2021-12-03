import Sequelize from "sequelize";

const postSchema = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    reference: { key: 'id', model: 'users' },
  },
};

export default postSchema;
