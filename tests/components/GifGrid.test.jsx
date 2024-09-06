import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
	const nameCategory = 'Dragon Ball';

	test('debe mostrar una animación de carga para los GIFs', () => {
		useFetchGifs.mockReturnValue({
			gifs: [],
			isLoading: true,
		});

		render(<GifGrid category={nameCategory} />);
		expect(screen.getByTestId('loading')).toBeTruthy();
	});

	test('debe mostrar la categoria y los GIFs obtenidos', () => {
		useFetchGifs.mockReturnValue({
			gifs: [
				{
					id: '123132',
					title: '1',
					url: '1',
					image: '1',
					width: '200',
					height: '300',
				},
				{
					id: '321321',
					title: '2',
					url: '2',
					image: '2',
					width: '200',
					height: '300',
				},
			],
			isLoading: false,
		});

		render(<GifGrid category={nameCategory} />);

		const title = screen.getByTestId('test_search-title').textContent;
		expect(title.includes(nameCategory)).toBeTruthy();

		const countGIFs = screen.getAllByTestId('test_gif').length;
		expect(countGIFs).toBeGreaterThan(0);
	});
});
