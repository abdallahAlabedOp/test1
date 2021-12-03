import Sequelize from "sequelize";

export const userSchema = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    required: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
  },
};

export default userSchema;