// sequelize-fixtures could be an option to make seeding easier

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [{
      title: 'John Doe',
      userId: 1,
      PostComments: [
        {
          userId: 1,
          text: 'Post 0 Content 0',
        },
        {
          userId: 1,
          text: 'Post 0 Content 1',
        },
      ],
    }], {
      include: [{
        model: models.PostComment,
      }],
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', [{
      title :'John Doe'
    }])
  }
};
