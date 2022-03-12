import { tr_delete } from '@src/transform/delete';


describe('transformation delete', () => {
	const data = { a: 10, b: 'xyz' };

	test('deletes property if it exists', () => {
		const result = tr_delete(data, { property: 'a' } as any);
		expect(result).toEqual({ b: 'xyz' });
	});

	test('do nothing if property does not exist', () => {
		const result = tr_delete(data, { property: 'x' } as any);
		expect(result).toStrictEqual(data);
	});
});
