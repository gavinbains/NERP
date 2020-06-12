# NERP

NERP

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

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
├── app.js
├── bin
│   └── www
├── node_modules
├── package-lock.json
├── package.json
├── server
│   ├── config
│   │   └── config.json
│   ├── migrations
│   ├── models
│   │   ├── index.js
│   │   ├── message.js
│   │   ├── post.js
│   │   ├── postcomment.js
│   │   └── user.js
│   ├── routes
│   │   ├── index.js
│   │   ├── message.js
│   │   ├── session.js
│   │   └── user.js
│   └── seeders
└── README.md
```
