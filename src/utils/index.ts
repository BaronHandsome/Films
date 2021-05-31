import { IApiFildData, IPreparedFilm } from "./types";

export const parseFilms = (data: IApiFildData): IPreparedFilm[] =>
  Object.values(data.results).map((film) => ({
    title: film.title,
    overview: film.overview,
    poster_path: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${film.poster_path}`,
    original_language: film.original_language,
    popularity: film.popularity,
    release_date: film.release_date,
  }));
