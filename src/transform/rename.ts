import { Data } from '@src/transform/transform';
import { Rename } from '@src/transformation';


export function tr_rename(data: Data, { from, to }: Rename): Data {
	return data;
}
