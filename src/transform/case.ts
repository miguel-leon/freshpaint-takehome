import { Data } from './transform';
import { Case } from '../transformation';


const CASE_FUNCTIONS = {
	lowercase: String.prototype.toLowerCase,
	uppercase: String.prototype.toUpperCase
};

export function tr_case(data: Data, { type, property }: Case): Data {
	if (!(property in data)) return data;
	const { [property]: value, ...rest } = data;
	return { ...rest, [property]: CASE_FUNCTIONS[type].call(value) };
}
