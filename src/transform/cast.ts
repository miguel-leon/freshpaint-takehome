import { Data } from './transform';
import { Cast } from '../transformation';


const FROM_STRING = {
	number: (value: string) => Number.parseInt(value),
	boolean: (value: string) => parseBoolean(value.toLowerCase())
};

const FROM_NUMBER = {
	string: (value: number) => String(value),
	boolean: (value: number) => Boolean(value)
};

const FROM_BOOLEAN = {
	string: (value: boolean) => String(value),
	number: (value: boolean) => Number(value)
};

const CASTING_FUNCTIONS = {
	string: FROM_STRING,
	number: FROM_NUMBER,
	boolean: FROM_BOOLEAN
};

export function tr_cast(data: Data, { property, to }: Cast): Data {
	const { [property]: value, ...rest } = data;
	const type: keyof typeof CASTING_FUNCTIONS = typeof value as any;
	if (type === to) return data;

	return { ...rest, [property]: (CASTING_FUNCTIONS[type] as any)[to](value) };
}


function parseBoolean(value: string): boolean | string {
	switch (value) {
		case 'true':
			return true;
		case 'false':
			return false;
		default:
			return value;
	}
}
