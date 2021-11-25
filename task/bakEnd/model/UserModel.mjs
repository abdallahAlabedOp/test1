import Sequelize from 'sequelize'

 class UserModel extends Sequelize {
    User = sequelize.define(
        "user",
        {
          name: {
            type: Sequelize.STRING,
            field: "name", // Will result in an attribute that is firstName when user facing but first_name in the database
          },
          username: {
            type: Sequelize.STRING,
            field: "user_name", // Will result in an attribute that is firstName when user facing but first_name in the database
          },
          email: {
            type: Sequelize.STRING,
            field: "email", // Will result in an attribute that is firstName when user facing but first_name in the database
          },
        },
        {
          freezeTableName: true, // Model tableName will be the same as the model name
        }
      );
            
}
 export default UserModel;