module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Post.associate = (models) => {
    Post.hasMany(models.PostComment, {
      foreignKey: 'postId',
    });
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    Post.belongsToMany(models.Tag, {
      through: 'PostTags',
      as: 'tags',
      foreignKey: 'postId',
      onDelete: 'CASCADE',
    });
  };

  return Post;
};
