import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch']);

	const onAddCategory = (newCategory) => {
		const existCategory = categories.find(
			(category) => category.toLowerCase() == newCategory.toLowerCase()
		);
		if (existCategory) return;
		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory onAddCategory={onAddCategory} />

			<ul>
				{categories.map((category) => (
					<li key={category}>{category}</li>
				))}
			</ul>
		</>
	);
};
