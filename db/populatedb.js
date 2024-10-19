#! /usr/bin/env node

const { Client } = require('pg');
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   text VARCHAR ( 255 ),
   username VARCHAR ( 50 ),
   added DATE DEFAULT CURRENT_DATE
);

INSERT INTO messages (text, username, added)
VALUES
  ('Hi there!', 'Amando', '2024-08-20'),
  ('Hello World!', 'Charles', '2024-08-20');
`;

async function main() {
    console.log('start');
    const client = new Client({
        connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();