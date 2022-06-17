import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {
        ids: [],
    },
    actions: {
        addToFavorite: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeFromFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        },
    },
});

export const addToFavorite = favoriteSlice.actions.addToFavorite;
export const removeFromFavorite = favoriteSlice.actions.removeFromFavorite;
export const favoritesReducer = favoriteSlice.reducer;
