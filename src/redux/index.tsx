import { combineReducers, createStore } from 'redux';

import { filmsReducer } from './films';

// Reducers;

export const rootReducer = combineReducers({
  films: filmsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;

export type AppAction = ReturnType<AppDispatch>;
