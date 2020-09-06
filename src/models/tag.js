module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  }, {
    tableName: 'tags'
  });

  // may need manytomany relationship between tags and posts
  // https://medium.com/@tonyangelo9707/many-to-many-associations-using-sequelize-941f0b6ac102
  // https://bezkoder.com/sequelize-associate-many-to-many/
  Tag.associate = (models) => {
    Tag.belongsToMany(models.Post, {
      through: "post_tags",
      as: "posts",
      foreignKey: 'tagId',
      onDelete: 'CASCADE',
    });
  };

  return Tag;
};
