import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Dragon Ball']);

	const onAddCategory = (newCategory) => {
		const existCategory = categories.find(
			(category) => category.toLowerCase() == newCategory.toLowerCase()
		);
		if (existCategory) return;
		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<h1>
				Buscador de <span>GIFS</span>:
			</h1>

			<AddCategory onAddCategory={onAddCategory} />

			{categories.map((category) => (
				<GifGrid
					key={category}
					category={category}
				/>
			))}
		</>
	);
};
