export interface StoreInterface
{
	id: number,
	name: string,
	address: string,
	city: string;
}

export enum Sex
{
	Male = 0,
	Female
}

export interface CashierInterface
{
	readonly id: number,
	storeId: number,
	name: string,
	surname: string,
	age?: number,
	sex?: Sex,
	yearsOfExperience: number,
	worksInShifts: {
		start: string,
		end: string;
	},
	previousWorkCompany: string,
	cashMachineNo: number;
}
