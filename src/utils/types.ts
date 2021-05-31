export interface IFilm {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: object[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: object[];
  production_countries: object[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: object[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  img: string;
}

export interface IApiFildData {
  page: number;
  results: Record<number, IFilm>;
  total_pages: number;
  total_results: number;
}

export interface IPreparedFilm {
  title: string;
  overview: string;
  poster_path: string;
  original_language: string;
  popularity: number;
  release_date: string;
}
