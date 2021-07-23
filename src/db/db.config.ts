// Loading and initializing the library:
import * as pgPromise from 'pg-promise';
require( 'dotenv' ).config({path: "../../.env"});


// Preparing the connection details:
const pgp = pgPromise.default({/* Initialization Options */});
const cn = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST||"127.0.0.1"}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_PORT}`;

// Creating a new database instance from the connection details:
export const db = pgp(cn);