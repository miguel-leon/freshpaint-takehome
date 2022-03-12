import { Data } from './transform';
import { Delete } from '../transformation';


export function tr_delete(data: Data, { property }: Delete): Data {
	return data;
}
