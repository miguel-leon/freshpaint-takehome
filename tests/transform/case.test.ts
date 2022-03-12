import { tr_case } from '@src/transform/case';


describe('transformation case', () => {

	test('lowercase property value', () => {
		const data = { a: 'Xyz', b: 10 };
		const result = tr_case(data, { type: 'lowercase', property: 'a' });
		expect(result).toEqual({ a: 'xyz', b: 10 });
	});

	test('uppercase property value', () => {
		const data = { a: 'Xyz', b: 10 };
		const result = tr_case(data, { type: 'uppercase', property: 'a' });
		expect(result).toEqual({ a: 'XYZ', b: 10 });
	});
});
