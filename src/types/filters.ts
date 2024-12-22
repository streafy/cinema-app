export type FiltersResponse = {
  genres: GenreFilter[];
  countries: CountryFilter[];
};

export type GenreFilter = {
  id: number;
  genre: string;
};

export type CountryFilter = {
  id: number;
  country: string;
};
