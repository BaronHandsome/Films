import { createReducer } from "reduxsauce";
import { IPreparedFilm } from "../../utils/types";
import { parseFilms } from "../../utils";

import {
  GetFilmsSuccessAction,
  GetFilmsFailureAction,
  FilmsAction,
  filmActionTypes,
} from "./actions";

export interface FilmsState {
  films: IPreparedFilm[];
}

const INITIAL_STATE: FilmsState = {
  films: [],
};

type Handler<A> = (state: FilmsState, action: A) => FilmsState;

const getFilmsSuccess: Handler<GetFilmsSuccessAction> = (state, { data }) => ({
  ...state,
  films: parseFilms(data),
});

const getFilmsFailure: Handler<GetFilmsFailureAction> = (state, { error }) => ({
  ...state,
  error,
});

export const filmsReducer = createReducer<FilmsState, FilmsAction>(
  INITIAL_STATE,
  {
    [filmActionTypes.GET_FILMS_SUCCESS]: getFilmsSuccess,
    [filmActionTypes.GET_FILMS_FAILURE]: getFilmsFailure,
  }
);
