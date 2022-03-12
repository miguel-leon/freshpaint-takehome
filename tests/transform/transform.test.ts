import { transform } from '@src/transform/transform';
import { tr_case } from '@src/transform/case';
import { tr_cast } from '@src/transform/cast';
import { tr_delete } from '@src/transform/delete';
import { tr_rename } from '@src/transform/rename';

jest.mock('@src/transform/case');
jest.mock('@src/transform/cast');
jest.mock('@src/transform/delete');
jest.mock('@src/transform/rename');

describe('transform function', () => {

	test.each`
		type | transformer
		${ 'rename' } | ${ tr_rename }
		${ 'uppercase' } | ${ tr_case }
		${ 'lowercase' } | ${ tr_case }
		${ 'delete' } | ${ tr_delete }
		${ 'cast' } | ${ tr_cast }
	`('calls the correct transform function: $type => $transformer', ({ type, transformer }) => {
		transform({}, { type } as any);
		expect(transformer).toHaveBeenCalled();
	});
});
