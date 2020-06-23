// sequelize-fixtures could be an option to make seeding easier

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      bio: 'Married to Jane Doe',
      email: 'johnDoe@test.com',
      password: 'janedoe69',
      username: 'johndoe69'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', [{
      name :'John Doe'
    }])
  }
};
