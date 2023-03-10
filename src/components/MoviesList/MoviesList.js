import { NavLink,  useLocation,  } from 'react-router-dom';
export const MoviesList = ({ movies }) => {

  const location = useLocation()
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`}  state ={{from: location}}>
            <h2>{movie.title}</h2>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
