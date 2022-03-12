import { tr_rename } from '@src/transform/rename';


describe('transformation rename', () => {
	const data = { a: 10, b: 'xyz', c: false };

	test('renames property if it exists', () => {
		const result = tr_rename(data, { from: 'a', to: 'd' } as any);
		expect(result).toEqual({ d: 10, b: 'xyz', c: false });
	});

	test('do nothing if property does not exist', () => {
		const result = tr_rename(data, { from: 'x', to: 'd' } as any);
		expect(result).toStrictEqual(data);
	});
});
