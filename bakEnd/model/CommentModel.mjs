import Sequelize from 'sequelize'

class CommentModel extends Sequelize {
     Comment = sequelize.define(
        "comment",
        {
          name: {
            type: Sequelize.STRING,
            field: "name", 
          },
          postId: {
            type: Sequelize.STRING,
            field: "post_id", 
          },
          email: {
            type: Sequelize.STRING,
            field: "email", 
          },  body: {
            type: Sequelize.STRING,
            field: "body", 
          }
        },
        {
          freezeTableName: true, 
        }
      );
            
}
 