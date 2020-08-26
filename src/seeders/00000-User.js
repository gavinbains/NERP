// sequelize-fixtures could be an option to make seeding easier

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      bio: 'Married to Jane Doe',
      email: 'johnDoe@test.com',
      password: 'janedoe69',
      username: 'johndoe69',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Gavin Bains',
      bio: 'USC',
      email: 'gbains@usc.edu',
      password: 'usc',
      username: 'thegavinbains',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Conner Chyung',
      bio: 'USC',
      email: 'cchyung@usc.edu',
      password: 'usc',
      username: 'cc.7zip',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', [{
      name :'John Doe'
    }, {
      name: 'Gavin Bains'
    }, {
      name: 'Conner Chyung'
    }])
  }
};
