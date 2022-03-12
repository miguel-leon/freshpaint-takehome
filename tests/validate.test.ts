import { validate } from '@src/validate/validate';


describe('transformation validation function', () => {
	test('tests for case type', () => {
		expect(validate({ type: 'uppercase', property: 'a' })).toBe(true);
		expect(validate({ type: 'lowercase', property: 'a' })).toBe(true);
		expect(validate({ type: 'uppercase' })).toBe(false);
	});

	test('tests for rename type', () => {
		expect(validate({ type: 'rename', from: 'a', to: 'b' })).toBe(true);
		expect(validate({ type: 'rename', from: 'a' })).toBe(false);
	});

	test('tests for delete type', () => {
		expect(validate({ type: 'delete', property: 'a' })).toBe(true);
		expect(validate({ type: 'delete' })).toBe(false);
	});

	test('tests for cast type', () => {
		expect(validate({ type: 'cast', property: 'a', to: 'string' })).toBe(true);
		expect(validate({ type: 'cast', property: 'a', to: 'object' } as any)).toBe(false);
		expect(validate({ type: 'cast', property: 'a' })).toBe(false);
	});

	test('tests false for unsupported types', () => {
		expect(validate({ type: 'something else' } as any)).toBe(false);
	});
});
