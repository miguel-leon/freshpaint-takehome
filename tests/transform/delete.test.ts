import { tr_delete } from '@src/transform/delete';


describe('transformation delete', () => {

	test('deletes property if it exists', () => {
		const data = { a: 10, b: 'xyz' };
		const result = tr_delete(data, { property: 'a' } as any);
		expect(result).toEqual({ b: 'xyz' });
	});
});
