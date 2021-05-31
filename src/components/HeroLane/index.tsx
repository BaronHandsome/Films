import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch } from "react-redux";

import { HeroLaneContainer } from "./style";
import { CAROUSEL_SETTINGS } from "./data";
import { useFilms, useSaveFilmsCallback } from "../../redux/films/hooks";
import { getFilms } from "../../api";
import { Film } from "../Film";

export const HeroLane: React.FC = () => {
  const dispatch = useDispatch();
  const onSaveFilms = useSaveFilmsCallback(dispatch);
  const films = useFilms();
  const topRatedFilms = films
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 3);
  console.log(topRatedFilms);

  const renderFilms = (): React.ReactNode =>
    topRatedFilms.map((film) => (
      <Film
        poster_path={film.poster_path}
        title={film.title}
        overview={film.overview}
        original_language={film.original_language}
        popularity={film.popularity}
        release_date={film.release_date}
      />
    ));

  useEffect(() => {
    getFilms().then((res) => {
      onSaveFilms(res.data);
    });
  }, []);

  return (
    <HeroLaneContainer>
      <Slider {...CAROUSEL_SETTINGS}>{renderFilms()}</Slider>
    </HeroLaneContainer>
  );
};
