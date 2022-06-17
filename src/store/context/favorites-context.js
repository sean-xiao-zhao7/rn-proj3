import { createContext, useState } from "react";

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
    const [ids, setIds] = useState([]);

    const addToFavorite = (id) => {
        setIds((prevIds) => {
            return [...prevIds, id];
        });
    };

    const removeFromFavorite = (id) => {
        setIds((prevIds) => {
            return prevIds.filter((prevId) => prevId !== id);
        });
    };

    return (
        <FavoritesContext.Provider
            value={{
                ids: ids,
                addToFavorite: addToFavorite,
                removeFromFavorite: removeFromFavorite,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContextProvider;
