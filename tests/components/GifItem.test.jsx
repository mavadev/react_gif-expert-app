import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {
	const GIF = {
		title: 'Saitama GIF',
		image: 'https://one-punch.com/saitama.jpg',
		url: 'https://mavadev.com',
		width: '300',
		height: '200',
	};

	test('debe hacer match con el snapshot', () => {
		const { container } = render(<GifItem {...GIF} />);
		expect(container).toMatchSnapshot();
	});

	test('debe mostrar el titulo del GIF', () => {
		render(<GifItem {...GIF} />);

		expect(screen.getByText(GIF.title)).toBeTruthy();
		// const { textContent } = screen.getByRole('paragraph');
		// expect(textContent).toBe(GIF.title);
	});

	test('debe mostrar la imagen con la URL y ALT indicado', () => {
		render(<GifItem {...GIF} />);

		const { src, alt } = screen.getByRole('img');
		expect(src).toBe(GIF.image);
		expect(alt).toBe(GIF.title);
	});

	test('debe mostrar la imagen con la URL y ALT indicado', () => {
		render(<GifItem {...GIF} />);

		const { src, alt } = screen.getByRole('img');
		expect(src).toBe(GIF.image);
		expect(alt).toBe(GIF.title);
	});

	test('debe redirigir a la URL original del GIF', () => {
		render(<GifItem {...GIF} />);

		const href = screen.getByRole('link').getAttribute('href');
		expect(href).toBe(GIF.url);
		// expect(screen.getByRole('link')).toHaveProperty('href', GIF.url + '/');
	});
});
