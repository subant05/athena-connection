# Athena Connect Module

## Installation

- npm i athena-connection

## Add .env with the following variables

- STORAGE_ENDPOINT
- STORAGE_ACCESS_KEY_ID
- STORAGE_SECRET_ACCESS_KEY
- STORAGE_PACKAGES_BUCKET
- ATHENA_DB
- ATHENA_CATALOG,

## Use: database.query()

- import {database, cts } from "athena-connection"
- const results = await database.query({sql: `SELECT * FROM formant_datastore LIMIT 10`});
