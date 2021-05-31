import axios from "axios";

import { FILMS_ENDPOINT } from "../utils/constatns";

export const getFilms = () => axios.get(FILMS_ENDPOINT);
