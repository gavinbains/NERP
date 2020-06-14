const Post = require('../models').Post;
const PostComment = require('../models').PostComment;

module.exports = {
  // We can have a third parameter, conventionally named next, which is a
  // function that passes the request on to the next route handler (meaning
  // that a route can be handled by multiple route handlers, in which case it's
  // piped or passed along all of those route handlers).
  create(req, res) {
    return Post
      .create({
        title: req.body.title,
      })
      .then((post) => res.status(201).send(post))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Post
      .findAll({
        include: [{
          model: PostComment,
          as: 'postComments',
        }],
        order: [
          ['createdAt', 'DESC'],
          [{ model: PostComment, as: 'postComments' }, 'createdAt', 'ASC'],
        ],
      })
      .then((posts) => res.status(200).send(posts))
      .catch((error) => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Post
      .findById(req.params.postId, {
        include: [{
          model: PostComment,
          as: 'postComments',
        }],
      })
      .then((post) => {
        if (!post) {
          return res.status(404).send({
            message: 'Post Not Found',
          });
        }
        return res.status(200).send(post);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Post
      .findById(req.params.postId, {
        include: [{
          model: PostComment,
          as: 'postComments',
        }],
      })
      .then(post => {
        if (!post) {
          return res.status(404).send({
            message: 'Post Not Found',
          });
        }
        return post
          .update({
            title: req.body.title || post.title,
          })
          .then(() => res.status(200).send(post))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Post
      .findById(req.params.postId)
      .then(post => {
        if (!post) {
          return res.status(400).send({
            message: 'Post Not Found',
          });
        }
        return post
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
