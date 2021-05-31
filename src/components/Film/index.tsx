import React from "react";

import { IPreparedFilm } from "../../utils/types";
import {
  FilmContainer,
  FilmData,
  Title,
  MetaData,
  Overview,
  Popularity,
  FilmPoster,
} from "./style";

export const Film: React.FC<IPreparedFilm> = ({
  poster_path,
  title,
  overview,
  original_language,
  popularity,
  release_date,
}) => {
  return (
    <div>
      <FilmContainer>
        <FilmPoster src={poster_path} />
        <FilmData>
          <Title>{title}</Title>
          <MetaData>
            <span>{release_date}</span>
            <span>Language: {original_language}</span>
          </MetaData>
          <Overview>{overview}</Overview>
          <Popularity>Popularity: {popularity}</Popularity>
        </FilmData>
      </FilmContainer>
    </div>
  );
};
