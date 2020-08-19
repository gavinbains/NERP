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
// create a new Post: create(object)
// find a Post by id: findByPk(id)
// get all Posts: findAll()
// update a Post by id: update(data, where: { id: id })
// remove a Post: destroy(where: { id: id })
// remove all Posts: destroy(where: {})
// find all Posts by title: findAll({ where: { title: ... } })
