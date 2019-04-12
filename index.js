const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const db = knex('knexfile.js');
const cohortRouter = require('./helpers/cohortRouter')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cohorts', cohortRouter);

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);