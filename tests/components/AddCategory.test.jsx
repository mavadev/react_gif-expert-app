import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('Pruebas en <AddCategory />', () => {
	const searchValue = 'Goku';

	test('debe de cambiar el valor del input de búsqueda', () => {
		render(<AddCategory onAddCategory={() => {}} />);
		const inputSearch = screen.getByRole('textbox');

		fireEvent.input(inputSearch, { target: { value: searchValue } });

		expect(inputSearch.value).toBe(searchValue);
	});

	test('debe de llamar onAddCategory si se envia el formulario', () => {
		const onAddCategory = jest.fn();

		render(<AddCategory onAddCategory={onAddCategory} />);

		const inputSearch = screen.getByRole('textbox');
		const formSearch = screen.getByRole('form');

		fireEvent.input(inputSearch, { target: { value: searchValue } });
		fireEvent.submit(formSearch);

		expect(inputSearch.value).toBe('');
		expect(onAddCategory).toHaveBeenCalledWith(searchValue);
		// expect(onAddCategory).toHaveBeenCalledTimes(1);
		// expect(onAddCategory).toHaveBeenCalled();
	});

	test('no debe de llamar onAddCategory si el input está vacio', () => {
		const onAddCategory = jest.fn();

		render(<AddCategory onAddCategory={onAddCategory} />);

		const formSearch = screen.getByRole('form');
		fireEvent.submit(formSearch);

		expect(onAddCategory).not.toHaveBeenCalled();
		// expect(onAddCategory).toHaveBeenCalledTimes(0);
	});
});
