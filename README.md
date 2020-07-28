<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# Esure Nestjs Dev Task

Thank you for the opportunity 😃

## Tasks

The API should have 2 routes:

1. The first for authenticating a username and password. ✅
- A successful authentication should return a JSON web token (JWT). ✅
- The second for retrieving a list of users by making a HTTP request to this URL: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
1. This second route should be protected from access unless a valid JWT is sent in the headers. ✅

### Installation

```bash
$ npm install / yarn install
```

### Running the app

```bash
# development
$ npm run start  / yarn start

# watch mode
$ npm run start:dev / yarn start:dev
```