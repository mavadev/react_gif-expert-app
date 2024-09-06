import { getGifs } from '../../src/helpers/getGifs.js';

describe('pruebas de la funcion getGifs.js', () => {
	test('debe retornar un arreglo de GIFs con su estructura', async () => {
		const gifs = await getGifs('dragon ball');
		expect(gifs.length).toBeGreaterThan(0);

		const estructura = {
			id: expect.any(String),
			title: expect.any(String),
			url: expect.any(String),
			image: expect.any(String),
			width: expect.any(String),
			height: expect.any(String),
		};
		expect(gifs[0]).toEqual(estructura);
	});
});
