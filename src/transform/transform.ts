import { Transformation } from '../transformation';
import { tr_rename } from './rename';
import { tr_case } from './case';
import { tr_delete } from './delete';
import { tr_cast } from './cast';


export interface Data {
	[k: string]: string | number | boolean;
}

const TRANSFORM_FUNCTIONS = {
	rename: tr_rename,
	uppercase: tr_case,
	lowercase: tr_case,
	delete: tr_delete,
	cast: tr_cast
};

export function transform(data: Data, transformation: Transformation): Data {
	return TRANSFORM_FUNCTIONS[transformation.type](data, transformation as any);
}
