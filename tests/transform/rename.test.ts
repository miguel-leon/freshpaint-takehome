import { tr_rename } from '@src/transform/rename';


describe('transformation rename', () => {

	test('renames property if it exists', () => {
		const data = { a: 10, b: 'xyz', c: false };
		const result = tr_rename(data, { from: 'a', to: 'd' } as any);
		expect(result).toEqual({ d: 10, b: 'xyz', c: false });
	});
});
