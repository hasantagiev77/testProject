import express from "express";
import {entities} from "./db/db.entities";
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page

app.get( '/storeCreate', entities.Store.create );
app.get( '/storeRead', entities.Store.read );
app.get( '/storeUpdate', entities.Store.update );
app.get( '/storeDelete', entities.Store.delete );

app.get( '/cashierCreate', entities.Cashier.create );
app.get( '/cashierRead', entities.Cashier.read );
app.get( '/cashierUpdate', entities.Cashier.update );
app.get( '/cashierDelete', entities.Cashier.delete );

app.get( "/", ( req: any, res: { send: ( arg0: string ) => void; } ) => {
	res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () =>
{
	// tslint:disable-next-line:no-console
	console.log( `server started at http://localhost:${ port }` );
} );
