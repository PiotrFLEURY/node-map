# node-server

This is nodeJs sample repository

## Purpose

This project is used for coding interviews

## Getting started

Fetch dependencies

```bash
npm install
```

Run the server

```bash
npm start
```

Run with hot reload

```bash
npm run dev
```

Update Swagger definition

```bash
npm run swagger-autogen
```

Start/Stop locale database

```bash
sh scripts/startDb.sh

sh scripts/stopDb.sh
```

Init database with test datas

```bash
npm run initDb
```

Build docker image

```bash
docker build .
```

Run as docker with server + database

```bash
docker compose build
docker compose up
npm run initDb
```

## Dependencies

|Name|Usage|
|----|-----|
|express|routing|
|nodemond|hot reload|
|dotenv|load config from env variables in .env file|
|pg|postgres database connection|
|swagger-ui-express|API documentation consultation|
|swagger-autogen|API documentation generation|