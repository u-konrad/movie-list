import React, { useEffect, useState, Fragment } from "react";
import useHttp from "../../shared/hooks/use-http";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import Wrapper from "./MoviePage.styles";
import testMovie from "./testMovie.json";
import { Rating } from "@mui/material";
import { MdOutlineArrowBack } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { lastRatedActions } from "../../store/store";

const url = "https://imdb-api.com/en/API/Title/k_x62pdsfe/";

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  // const { fetchData, isLoading } = useHttp();
  const [isError, setError] = useState(false);
  const [rating, setRating] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const { movieId } = useParams();

  const isLoading = false;

  useEffect(() => {
    // const fetchMovie = async () => {
    //   try {
    //     const response = await fetchData(url + movieId);
    //     setMovie(response);
    //   } catch (err) {
    //     setError(true);
    //   }
    // };
    setMovie(testMovie);
    // fetchMovie();
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        "Nie udało się załadować filmu."
      ) : (
        !!movie && (
          <>
            <div className="movie-container">
              <img src={movie.image} alt="" />
              <div>
                <h2>{movie.title}</h2>
                <p>
                  <strong>ImdbRating:</strong> {movie.imDbRating ?? "Brak ocen"}
                </p>
                <p>{movie.genres}</p>
                <p>{movie.plot}</p>
                <p>
                  <strong>Obsada</strong>
                </p>
                <div className="actor-container">
                  {movie.actorList.slice(0, 12).map((actor) => (
                    <div>
                      <img src={actor.image} alt="" />
                      <p>{actor.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rating-container">
              <p className="mb-3">Twoja ocena:</p>
              <Rating
                name="rating"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                  dispatch(
                    lastRatedActions.setLastRated({ title: movie.title, value: newValue })
                  );
                }}
                max={10}
                size="large"
              />{" "}
            </div>
            <button
              className="btn btn-outline-dark mt-4"
              onClick={() => history.push("/")}
            >
              <MdOutlineArrowBack /> Powrót
            </button>
          </>
        )
      )}
    </Wrapper>
  );
};

export default MoviePage;