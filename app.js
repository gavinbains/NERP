const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./logger');

// dotenv
import 'dotenv/config';
// models and sequelize
import models, { sequelize } from './src/models';
// routes
import routes from './src/routes';

// Set up the express app
const app = express();

// use CORS to avoid cross-origin
// var corsOptions = {
//   origin: "http://localhost:8081"
// };
// app.use(cors(corsOptions));
app.use(cors());

// Log requests to the console.
app.use(morgan('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// custom middleware for models/auth
app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('gbains'),
  };
  next();
});
// passport JWT encryption backend

// use routes
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);
app.use('/posts', routes.post);
app.use('/postcomments', routes.postcomment);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

// * Start * //

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    // SEED DB
    // createUsersWithMessages();
    logger.info('createUsersWithMessages');
  }

  // This app.listen block is executed in bin/www
  // app.listen(process.env.PORT, () =>
  //   console.log(`Example app listening on port ${process.env.PORT}!`),
  // );
});

// SEED DB
const createUsersWithMessages = async () => {
  await models.User.create(
    {
      username: 'gbains',
      email: 'gbains@usc.edu',
      password: 'usc',
      Messages: [
        {
          text: 'Gavin Message 0',
        },
      ],
    },
    {
      include: [{
        model: models.Message,
      }],
    },
  );

  await models.User.create(
    {
      username: 'cchyung',
      email: 'cchyung@usc.edu',
      password: 'usc',
      Messages: [
        {
          text: 'Conner Message 0',
        },
        {
          text: 'Conner Message 1',
        },
      ],
    },
    {
      include: [{
        model: models.Message,
      }],
    },
  );

  await models.Post.create(
    {
      title: 'Post Title 0',
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
    },
    {
      include: [{
        model: models.PostComment,
      }],
    },
  );
};

module.exports = app;
