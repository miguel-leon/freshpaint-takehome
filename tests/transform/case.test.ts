import { tr_case } from '../../src/transform/case';


describe('transformation case', () => {

	test('lowercase property value', () => {
		const data = { a: 'Xyz', b: 10 };
		const result = tr_case(data, { type: 'lowercase', property: 'a' });
		expect(result).toEqual({ a: 'xyz', b: 10 });
	});
});
