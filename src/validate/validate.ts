import { Transformation } from '../transformation';


type TransformationKeys<T extends Transformation['type']> =
	Transformation extends infer TransformationType ?
		TransformationType extends Transformation ?
			T extends TransformationType['type'] ?
				Exclude<keyof TransformationType, 'type'> :
				never :
			never :
		never;

type Spec = {
	[k in Transformation['type']]: {
		[p in TransformationKeys<k>]: (value: any) => boolean;
	};
};

const SPEC: Spec = {
	rename: {
		from: matchString,
		to: matchString
	},
	uppercase: {
		property: matchString
	},
	lowercase: {
		property: matchString
	},
	delete: {
		property: matchString
	},
	cast: {
		property: matchString,
		to: matchOne('boolean', 'string', 'number')
	}
};

export function validate(transformation: Partial<Transformation>): boolean {
	if (!(transformation.type! in SPEC)) return false;

	return Object.entries((SPEC as any)[transformation.type as any])
		.every(([key, match]) => {
			if (!(key in transformation)) return false;
			return (match as any)((transformation as any)[key]);
		})
}


function matchString(value: any): boolean {
	return typeof value === 'string';
}


function matchOne(...types: string[]) {
	return (value: any): boolean =>
		value.match(new RegExp(`^(${ types.join('|') })$`));
}
