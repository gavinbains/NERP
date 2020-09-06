module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: true,
    },
  }, {
    tableName: 'categories'
  });

  Category.associate = (models) => {
    Category.belongsToMany(models.Product, {
      through: "product_categories",
      as: "products",
      foreignKey: 'categoryId',
      onDelete: 'CASCADE',
    });
  };

  return Category;
};
