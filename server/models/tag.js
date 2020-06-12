const tag = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  });

  // may need manytomany relationship between tags and posts
  // https://medium.com/@tonyangelo9707/many-to-many-associations-using-sequelize-941f0b6ac102

  return Tag;
};

export default tag;
