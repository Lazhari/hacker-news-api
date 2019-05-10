# Hacker news API

This Project is my implementation of [how to graphql course](https://www.howtographql.com/) for Node.js and Prisma based on [graphql-yoga](https://github.com/prisma/graphql-yoga) and [prisma](https://www.prisma.io/).

## How to use

### 1. Get the project and install the dependencies

Clone the repository:

```bash
git clone https://github.com/Lazhari/hacker-news-api.git
```

Install Node dependencies

```bash
cd hacker-news-api
yarn
```

### 2. Install the Prisma CLI

To run the server, you need the Prisma CLI. Please install it via NPM

```bash
npm install -g prisma
```

### 3. Set up database & deploy Prisma datamodel

```bash
prisma deploy
```

### 4. Start the GraphQL server

Launch your GraphQL server with this command:

```bash
npm run start
```

Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the API of you GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground).
