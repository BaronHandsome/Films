import React from "react";

import { IPreparedFilm } from "../../utils/types";
import { FilmData, Title, MetaData, Overview, Popularity } from "./style";

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
      <div style={{ display: "flex" }}>
        <img src={poster_path} style={{ display: "block" }} alt="" />
        <FilmData>
          <Title>{title}</Title>
          <MetaData>
            <span>{release_date}</span>
            <span>Language: {original_language}</span>
          </MetaData>
          <Overview>{overview}</Overview>
          <Popularity>Popularity: {popularity}</Popularity>
        </FilmData>
      </div>
    </div>
  );
};
