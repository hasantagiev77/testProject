import express from "express";
import {entities} from "./db/db.entities";
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page

app.get( '/storeCreate', entities.store.create );
app.get( '/storeRead', entities.store.read );
app.get( '/storeUpdate', entities.store.update );
app.get( '/storeDelete', entities.store.delete );
app.get( "/", ( req: any, res: { send: ( arg0: string ) => void; } ) => {
	res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () =>
{
	// tslint:disable-next-line:no-console
	console.log( `server started at http://localhost:${ port }` );
} );
