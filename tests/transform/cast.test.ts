import { tr_cast } from '@src/transform/cast';


describe('transformation cast', () => {
	const data = { a: 10, b: 'FALSE', c: '999', d: true };

	describe('casts from number', () => {
		test('to string', () => {
			const result = tr_cast(data, { property: 'a', to: 'string' } as any);
			expect(result).toHaveProperty('a', '10');
		});

		test('to boolean', () => {
			const result = tr_cast(data, { property: 'a', to: 'boolean' } as any);
			expect(result).toHaveProperty('a', true);
		});
	});

	describe('casts from string', () => {
		test('to number', () => {
			const result = tr_cast(data, { property: 'c', to: 'number' } as any);
			expect(result).toHaveProperty('c', 999);
		});

		test('to boolean', () => {
			const result = tr_cast(data, { property: 'b', to: 'boolean' } as any);
			expect(result).toHaveProperty('b', false);
		});
	});

	describe('casts from boolean', () => {
		test('to number', () => {
			const result = tr_cast(data, { property: 'd', to: 'number' } as any);
			expect(result).toHaveProperty('d', 1);
		});

		test('to string', () => {
			const result = tr_cast(data, { property: 'd', to: 'string' } as any);
			expect(result).toHaveProperty('d', 'true');
		});
	});
});
