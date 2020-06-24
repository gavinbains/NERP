module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    brand: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    sku: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      unique: false,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: true,
    },
  });

  Product.associate = (models) => {
    Product.belongsToMany(models.Category, {
      through: "ProductCategories",
      as: "categories",
      foreignKey: 'productId',
      onDelete: 'CASCADE',
    });
  };

  return Product;
};
