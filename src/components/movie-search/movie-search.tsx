import { search } from '@/actions/actions';
import Input from '@/components/form/input/input';
import Range from '@/components/form/range/range';
import Select from '@/components/form/select/select';
import { CountryFilter, GenreFilter } from '@/types/filters';
import { MovieType, SortBy } from '@/types/movie-search';

import styles from './movie-search.module.css';

const sortTypes: Record<SortBy, string> = {
  RATING: 'по рейтингу',
  NUM_VOTE: 'по голосам',
  YEAR: 'по году',
};

const movieTypes: Record<MovieType, string> = {
  FILM: 'фильм',
  TV_SHOW: 'ТВ шоу',
  TV_SERIES: 'сериал',
  MINI_SERIES: 'мини-сериал',
  ALL: 'любой',
};

type MovieSearchProps = {
  genres: GenreFilter[];
  countries: CountryFilter[];
};

const MovieSearch = ({ genres, countries }: MovieSearchProps) => {
  return (
    <form className={styles.container} action={search}>
      <div className={styles.wrapper}>
        <Input label="Название" type="text" name="keyword" />
        <Select
          label="Страна"
          placeholder="-- Выберите страну --"
          name="countries"
        >
          {countries.map(({ id, country }) => (
            <option key={id} value={id}>
              {country}
            </option>
          ))}
        </Select>
        <Select label="Жанр" placeholder="-- Выберите жанр --" name="genres">
          {genres.map(({ id, genre }) => (
            <option key={id} value={id}>
              {genre}
            </option>
          ))}
        </Select>
        <Select
          label="Сортировка"
          placeholder="-- Выберите тип сортировки --"
          name="order"
        >
          {Object.entries(sortTypes).map(([value, text]) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </Select>
        <Select
          label="Тип фильма"
          placeholder="-- Выберите тип фильма --"
          name="type"
        >
          {Object.entries(movieTypes).map(([value, text]) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </Select>
        <Range label="Рейтинг" min={0} max={10} step={0.1} name="rating" />
        <Range label="Год" min={0} max={9999} name="year" />
        <Input label="IMDb ID" type="text" name="imdbId" />
      </div>
      <button className={styles.button}>Поиск</button>
    </form>
  );
};

export default MovieSearch;
