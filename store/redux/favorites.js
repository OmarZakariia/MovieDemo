// * Create a favorites slice to define some state, data and actions that will change this data

import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  // name
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    // functions I will use to change my state
    addFavorite: (state, action) => {
      // change the state, push the new id
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

// * export and expose
export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
