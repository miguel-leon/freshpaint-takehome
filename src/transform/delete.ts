import { Data } from './transform';
import { Delete } from '../transformation';


export function tr_delete(data: Data, { property }: Delete): Data {
	const { [property]: _, ...rest } = data;
	return rest;
}
