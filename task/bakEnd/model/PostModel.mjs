import Sequelize from 'sequelize'

class PostModel extends Sequelize {
     Post = sequelize.define(
        "post",
        {
            title: {
            type: Sequelize.STRING,
            field: "title", 
          },
          userId: {
            type: Sequelize.INTEGER,
            field: "user_id",

          },
          body: {
            type: Sequelize.STRING,
            field: "body", 
          },
        },
        {
          freezeTableName: true,
        }
      );
            
}