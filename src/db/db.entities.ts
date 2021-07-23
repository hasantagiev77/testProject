import { db } from "./db.config";
class Store
{
	async selectStores( reg: any, res: any, next: any )
	{
		try
		{
			const users = await db.query( 'SELECT * FROM store WHERE id=$1', [ reg.query?.id ] );
			// tslint:disable-next-line:no-console
			console.log( reg.query );
			// success
			res.send( users );
		}
		catch ( e )
		{
			// tslint:disable-next-line:no-console
			res.send( "ERROR" );
		}
	}
}

export const entities = {
	store: new Store(),
};