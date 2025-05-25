import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice';

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
    },
});

store.subscribe(() => {
    localStorage.setItem('myTeam', JSON.stringify(store.getState().pokemon.myTeam));
});

export default store;