const express = require("express");
const router = express.Router();
var bcrypt = require("bcryptjs");

const { sequelize } = require('../models');
const DataTypes = sequelize.DataTypes;
const User = require('../models/user')(sequelize, DataTypes);

const jwt = require('../../app').jwt;
const jwtOptions = require('../../app').jwtOptions;

router.post('/register', async function(req, res) {

	user = await User.findOne({ username: req.body.username });

	if (user != null) { 
		res.status(401).json({ msg: "User with this username already exists." });
	}

	const salt = bcrypt.genSaltSync();
	const hashed_password = bcrypt.hashSync(req.body.password, salt);

	user = await User.create({
		username: req.body.username,
		email: req.body.email,
		password: hashed_password,
		name: req.body.name,
		bio: req.body.bio
	});

	res.json({ user, msg: 'account created successfully' });
});

router.post('/login', async function(req, res) {
  const { username, password } = req.body;
  if (username && password) {
    let user = await User.findOne({ username: username });
    if (!user) {
      res.status(401).json({ msg: 'No such user found' });
    }
    if (bcrypt.compareSync(password, user.password)) {
      let payload = { id: user.id };
      let token = jwt.sign(payload, jwtOptions.secretOrKey);
      res.json({ msg: 'ok', token: token });
    } else {
      res.status(401).json({ msg: 'Password is incorrect' });
    }
  }
});

router.get('/', async (req, res) => {
  const users = await req.context.models.User.findAll();
  return res.send(users);
});

router.get('/:userId', async (req, res) => {
  const user = await req.context.models.User.findByPk(
    req.params.userId,
  );
  return res.send(user);
});

export default router;
