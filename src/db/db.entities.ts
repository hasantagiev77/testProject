import { db } from "./db.config";
import { StoreInterface, CashierInterface } from '../models';
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

class Cashier
{
	async create( req: any, res: any )
	{
		try
		{
			const data: CashierInterface = req.query;
			const cashier = await db.query( `INSERT INTO public.cashier(
 						store_id, name, surname, age, sex, yearsofexperience, worksinshifts, previousworkcompany, cashmachineno)
 						VALUES(${ data.storeId }, '${ data.name }', '${ data.surname }', ${ data.age }, B'${ data.sex }', ${ data.yearsOfExperience }, '${ data.worksInShifts }', '${ data.previousWorkCompany }', ${ data.cashMachineNo });` );
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
			const cashier = await db.query( 'SELECT * FROM public.cashier' );

			// success
			res.send( cashier );
		} catch ( e )
		{
			res.send( e );
		}
	}

	async update( req: any, res: any )
	{
		try
		{
			const data: CashierInterface = req.query;
			await db.query( `UPDATE public.cashier SET
					store_id=${ data.storeId }, name='${ data.name }', surname='${ data.surname }', age=${ data.age }, sex=B'${ data.sex }', yearsofexperience=${ data.yearsOfExperience }, worksinshifts='${ data.worksInShifts }', previousworkcompany='${ data.previousWorkCompany }', cashmachineno=${ data.cashMachineNo }
					WHERE id=${ data.id };
			` );
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
			const data: CashierInterface = req.query;
			await db.query( `DELETE FROM public.cashier WHERE id=${ data.id }` );
			res.send( "success" );
		} catch ( e )
		{
			res.send( e );
		}
	}
}

export const entities = {
	Store: new Store(),
	Cashier: new Cashier()
};