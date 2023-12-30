import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
	ids: [],
	addFavorites: (id) => {},
	removeFavorites: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
	const [favoriteMealIds, setFavoriteMealIds] = useState([]);

	const addFavorite = (id) => {
		setFavoriteMealIds((currentIds) => [...currentIds, id]);
	};

	const removeFavorite = (id) => {
		setFavoriteMealIds((currentIds) =>
			currentIds.filter((mealId) => mealId !== id)
		);
	};

	const value = {
		ids: favoriteMealIds,
		addFavorites: addFavorite,
		removeFavorites: removeFavorite,
	};

	return (
		<FavoritesContext.Provider value={value}>
			{children}
		</FavoritesContext.Provider>
	);
};

export default FavoritesContextProvider;
