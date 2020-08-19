# NERP

NERP

## Getting Started
After cloning, run
```
npm install
```
After node dependencies are installed you can start the program with
```
npm run start:dev
```

### Prerequisites

Node + NPM
```
https://www.npmjs.com/get-npm
```
PostgreSQL
```
brew update
brew install postgresql
```
Express
```
npm install --save express body-parser morgan
```
SequelizeCLI
```
npm install -g sequelize-cli
```
Sequelize + PostgreSQL Wrapper
```
npm install --save sequelize pg pg-hstore
```

## Authors

* **Gavin Bains** - *USC* - [Github](https://github.com/gbains8172)
* **Conner Chyung** - *USC* - [Github](https://github.com/cchyung)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Directory Tree
```
.
├── README.md
├── app.js
├── bin
│   └── www
├── package-lock.json
├── package.json
└── src
    ├── config
    │   └── config.json
    ├── controllers
    │   ├── index.js
    │   ├── postcomments.js
    │   ├── posts.js
    │   └── users.js
    ├── migrations
    │   ├── 000-create-user.js
    │   ├── 001-create-post.js
    │   ├── 002-create-post-comment.js
    │   ├── 003-create-message.js
    │   └── 004-create-tag.js
    ├── models
    │   ├── index.js
    │   ├── message.js
    │   ├── post.js
    │   ├── postcomment.js
    │   ├── tag.js
    │   └── user.js
    ├── routes
    │   ├── index.js
    │   ├── message.js
    │   ├── post.js
    │   ├── postcomment.js
    │   ├── session.js
    │   └── user.js
    └── seeders
        └── tags.txt
```
