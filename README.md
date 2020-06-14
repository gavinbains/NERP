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
