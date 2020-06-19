const posts = require('./posts');
const postComments = require('./postcomments');
const users = require('./users');

module.exports = {
  posts,
  postComments,
  users,
};

// After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:
// 
// create a new Tutorial: create(object)
// find a Tutorial by id: findByPk(id)
// get all Tutorials: findAll()
// update a Tutorial by id: update(data, where: { id: id })
// remove a Tutorial: destroy(where: { id: id })
// remove all Tutorials: destroy(where: {})
// find all Tutorials by title: findAll({ where: { title: ... } })
