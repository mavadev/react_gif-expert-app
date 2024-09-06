import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs.js', () => {
	test('debe regresar el estado inicial', () => {
		const { result } = renderHook(() => useFetchGifs('Dragon Ball'));
		const { gifs, isLoading } = result.current;

		expect(gifs.length).toBe(0);
		expect(isLoading).toBeTruthy();
	});

	test('debe regresar los GIFs y isLoading en false', async () => {
		const { result } = renderHook(() => useFetchGifs('Dragon Ball'));

		await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));

		const { gifs, isLoading } = result.current;
		expect(gifs.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
