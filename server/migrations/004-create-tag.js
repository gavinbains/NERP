module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }),
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('Tags'),
};
