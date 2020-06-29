const express = require("express");
const router = express.Router();
var bcrypt = require("bcryptjs");

const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const sequelize = require('../models').sequelize;
const User = require('../models/user')(sequelize, DataTypes);

router.post('/register', async function(req, res) {

	let user;
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
