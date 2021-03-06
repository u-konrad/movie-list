import React, { useEffect, useState } from "react";
import useHttp from "../../shared/hooks/use-http";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import Wrapper from "./MoviePage.styles";
import { Rating } from "@mui/material";
import { MdOutlineArrowBack } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { lastRatedActions } from "../../store/store";
import genres from "../../shared/constants/genres";
import { AiFillStar } from "react-icons/ai";
import truncateText from "../../shared/utils/truncateText";

const url = `https://imdb-api.com/en/API/Title/${process.env.REACT_APP_API_KEY}/`;

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const { fetchData,isLoading} = useHttp();
  const [isError, setError] = useState(false);
  const [rating, setRating] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetchData(url + movieId);
        setMovie(response);
      } catch (err) {
        setError(true);
      }
    };
    fetchMovie();

  }, [fetchData, movieId]);

  return (
    <Wrapper>
      {isLoading ? (
        <LoadingSpinner />
      ) : isError || !movie?.title ? (
        "Nie udało się załadować filmu."
      ) : (
        <>
          <div className="movie-container">
            <img src={movie.image} alt="" />
            <div>
              <h2 data-testid="title">{movie.title}</h2>
              <p className="mb-2">
                <strong>IMDbRating:</strong>{" "}
                {movie.imDbRating ? (
                  <span>
                    <AiFillStar style={{ color: "goldenrod" }} />{" "}
                    {movie.imDbRating}
                  </span>
                ) : (
                  "Brak ocen"
                )}
              </p>
              <p  className="mb-2">
                {" "}
                <strong>Premiera:</strong> {movie.releaseDate}
              </p>
              <p  className="mb-2">
                {" "}
                {movie.genreList?.map((genre, index) => (
                  <span key={index} className="me-1">
                    {genres[genre.key]} {genre.key}{" "}
                  </span>
                ))}
              </p>
              <p  className="mb-2">{truncateText(movie.plot, 300)}</p>
              <p  className="mb-2">
                <strong>Obsada:</strong>
              </p>
              <div className="actor-container">
                {!!movie.actorList &&
                  movie.actorList.slice(0, 10).map((actor, index) => (
                    <div key={index}>
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
                  lastRatedActions.addRatedMovie({
                    title: movie.title,
                    value: newValue,
                  })
                );
              }}
              max={10}
              size="large"
            />{" "}
          </div>
        </>
      )}
      <button
        className="d-block btn btn-outline-dark mt-4"
        onClick={() => history.push("/")}
      >
        <MdOutlineArrowBack /> Powrót
      </button>
    </Wrapper>
  );
};

export default MoviePage;
