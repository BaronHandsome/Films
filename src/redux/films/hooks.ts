import { useCallback } from "react";
import { useSelector } from "react-redux";

import { filmActionTypes } from "./actions";
import { IApiFildData } from "./../../utils/types";
import { RootState, AppDispatch } from "..";
import { IPreparedFilm } from "../../utils/types";

// Selector hooks
export const useFilms = () =>
  useSelector((state: RootState): IPreparedFilm[] => state.films.films);

export const useSaveFilmsCallback = (dispatch: AppDispatch) =>
  useCallback(
    (data: IApiFildData) =>
      dispatch({
        type: filmActionTypes.GET_FILMS_SUCCESS,
        data,
      }),
    []
  );
