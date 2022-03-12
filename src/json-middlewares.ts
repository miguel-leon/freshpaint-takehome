import { transform as transformInternal } from './transform/transform';
import { validate as validateInternal } from './validate/validate';


export function transform(data: string, transformation: string): string {
	return JSON.stringify(transformInternal(JSON.parse(data), JSON.parse(transformation)));
}

export function validate(data: string): boolean {
	return validateInternal(JSON.parse(data));
}
