import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/apiServices';
 const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const searchQeary = searchParams.get('query');
    if (!searchQeary) {
      return;
    }
    console.log(searchQeary);
    getMoviesByQuery(searchQeary).then(setMovies).finally(()=>
searchQeary(searchQeary)
    );
  }, [searchParams]);

  const handleSubmit = evt => {
    evt.preventDefault();
    console.dir(evt.target);
    if (!searchParams) {
      return;
    }
    setSearchParams({ query });
  };

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Movies</div>
        <input type="text" name="query" value={query} onChange={handleChange} />
        <button type="submit"> Search</button>
      </form>
      <MoviesList movies={movies}></MoviesList>
       
    </div>
  );
};


export default Movies