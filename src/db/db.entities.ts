import { db } from "./db.config";
import { StoreInterface } from '../models';
class Store
{
	async create( req: any, res: any )
	{
		try
		{
			const data: StoreInterface = req.query;
			const store = await db.query( `INSERT INTO public.store(
				name, address, city)
				VALUES ('${ data.name }', '${ data.address }', '${ data.city }');` );
			res.send( "Success" );
		} catch ( e )
		{
			res.send( e );
		}
	}
	async read( req: any, res: any )
	{
		try
		{
			const stores = await db.query( 'SELECT * FROM public.store' );
			// success
			res.send( stores );
		}
		catch ( e )
		{
			// tslint:disable-next-line:no-console
			res.send( e );
		}
	}

	async update( req: any, res: any )
	{
		try
		{
			const data: StoreInterface = req.query;
			const store = await db.query( `UPDATE public.store SET
			 name='${ data.name }', address='${ data.address }', city='${ data.city }'
			 WHERE id=${ data.id };` );
			res.send( "Success" );
		} catch ( e )
		{
			res.send( e );
		}
	}
	async delete( req: any, res: any )
	{
		try
		{
			const data: StoreInterface = req.query;
			const store = await db.query( `DELETE FROM public.store WHERE id = ${ data.id };` );
		} catch ( e )
		{
			res.send( e );
		}
	}
}

export const entities = {
	store: new Store(),
};