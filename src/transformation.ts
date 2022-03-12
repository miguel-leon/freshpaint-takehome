export type Transformation =
	Rename
	| Case
	| Delete
	| Cast;

export interface Rename {
	type: 'rename';
	from: string;
	to: string;
}

export interface Case {
	type: 'lowercase' | 'uppercase';
	property: string;
}

export interface Delete {
	type: 'delete';
	property: string;
}

export interface Cast {
	type: 'cast';
	property: string;
	to: 'string' | 'boolean' | 'number';
}
