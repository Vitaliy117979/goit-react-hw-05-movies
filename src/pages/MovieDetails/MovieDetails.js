import { useEffect, useState } from 'react';
import { BASE_IMG_URL } from 'services/constans';
import { Link, Container,IMG, Button} from "./MovieDetails.styled";

import {  Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMoviesDetails } from 'services/apiServices';
 const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    getMoviesDetails(id).then(setDetails);
  }, [id]);
  console.log(details);

  if (!details) {
    return <h1>Error</h1>;
  }

  const handleGoBack = () => {
navigate(location.state.from)
  }

  return (
    <Container >
      <h2>{details.title}</h2>

      <Button type="button" onClick={handleGoBack}>Go back</Button>

      <IMG src={BASE_IMG_URL + details.poster_path} alt={details.title }/>
      <Link to="cast" state ={{from: location.state.from}}>Cast</Link>
      <Link to="reviews" state ={{from: location.state.from}}>Reviews</Link>
       <Outlet/>

    </Container>
  );
};

export default MovieDetails