import { Data } from './transform';
import { Rename } from '../transformation';


export function tr_rename(data: Data, { from, to }: Rename): Data {
	const { [from]: value, ...rest } = data;
	return { ...rest, [to]: value };
}
