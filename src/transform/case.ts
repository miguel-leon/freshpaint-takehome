import { Data } from '@src/transform/transform';
import { Case } from '@src/transformation';


const CASE_FUNCTIONS = {
	lowercase: String.prototype.toLowerCase,
	uppercase: String.prototype.toUpperCase
};

export function tr_case(data: Data, { type, property }: Case): Data {
	const { [property]: value, ...rest } = data;
	return { ...rest, [property]: CASE_FUNCTIONS[type].call(value) };
}
