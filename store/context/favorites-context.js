import { createContext } from 'react';

export const FavoritesContext = createContext({
	ids: [],
	addFavorites: (id) => {},
	removeFavorites: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  

  
	return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
