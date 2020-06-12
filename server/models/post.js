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
      as: 'postComments',
    });
  };
  return Post;
};
