const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
      .create({
        email: req.body.email,
        username: req.body.username,
        name: req.body.name,
        password: req.body.password,
        bio: req.body.bio,
        image: req.body.image,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return User
      .findAll()
      .then((posts) => res.status(200).send(posts))
      .catch((error) => res.status(400).send(error));
  },

  retrieve(req, res) {
    return User
      .findById(req.params.userId)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(post);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return User
      .findById(req.params.userId)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return user
          .update({
            name: req.body.name || user.name,
            email: req.body.email || user.email,
            username: req.body.username || user.username,
            bio: req.body.bio || user.bio,
            password: req.body.password || user.password,
            image: req.body.image || user.image,
          })
          .then(() => res.status(200).send(user))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return User
      .findById(req.params.userId)
      .then((user) => {
        if (!user) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
