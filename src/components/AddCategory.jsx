import { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {
	const [search, setSearch] = useState('');

	const onInputChange = (event) => {
		setSearch(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (search.trim() == '') return;

		onAddCategory(search.trim());
		setSearch('');
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				value={search}
				onChange={onInputChange}
				placeholder="Demon Slayer"
			/>
			<button>BUSCAR</button>
		</form>
	);
};
