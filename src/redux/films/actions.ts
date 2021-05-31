import { createActions } from "reduxsauce";

import { IApiFildData } from "../../utils/types";

interface FilmActionTypes {
  GET_FILMS_SUCCESS: "GET_FILMS_SUCCESS";
  GET_FILMS_FAILURE: "GET_FILMS_FAILURE";
}

export interface GetFilmsSuccessAction {
  type: FilmActionTypes["GET_FILMS_SUCCESS"];
  data: IApiFildData;
}

export interface GetFilmsFailureAction {
  type: FilmActionTypes["GET_FILMS_FAILURE"];
  error: string;
}

interface FilmActionsCreators {
  getFilmsSuccess(data: IApiFildData): GetFilmsSuccessAction;
  getFilmsFailure(error: string): GetFilmsFailureAction;
}

export type FilmsAction = GetFilmsSuccessAction | GetFilmsFailureAction;

const { Types, Creators } = createActions<FilmActionTypes, FilmActionsCreators>(
  {
    getFilmsSuccess: ["data"],
    getFilmsFailure: ["error"],
  },
  {
    prefix: "FILM/",
  }
);

export const filmActionTypes = Types;

export const filmActionCreators = Creators;
