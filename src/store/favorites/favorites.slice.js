import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: recipe }) => {
      const isExists = state.some((r) => r.id === recipe.id); //Проверка на наличие рецепта в избранных

      if (isExists) {
        const index = state;
        findIndex((item) => item.id === recipe.id);
      } //Если условие 10 строки true то элемент
      //удаляется с избранных (recipe)
      if (index !== -1) {
        state.splice(index, 1);
      } else {
        state.push(recipe);
      } //Иначе добавляем в избранное (если 10 строка false)
    },
  },
});
export const { actions, reducer } = favoritesSlice;
