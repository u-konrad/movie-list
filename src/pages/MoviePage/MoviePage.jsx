import React, { useEffect, useState } from "react";
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
import genres from "../../shared/constants/genres";
import { AiFillStar } from "react-icons/ai";
import truncateText from "../../shared/utils/truncateText";

const url = "https://imdb-api.com/en/API/Title/k_x62pdsfe/";

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const { fetchData, isLoading } = useHttp();
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
    setMovie(testMovie);
    fetchMovie();
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <LoadingSpinner />
      ) : isError || !movie.title ? (
        "Nie udało się załadować filmu."
      ) : (
        !!movie && (
          <>
            <div className="movie-container">
              <img src={movie.image} alt="" />
              <div>
                <h2>{movie.title}</h2>
                <p>
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
                <p>
                  {" "}
                  <strong>Premiera:</strong> {movie.releaseDate}
                </p>
                <p>
                  {" "}
                  {movie.genreList?.map((genre) => (
                    <span className="me-1">
                      {genres[genre.key]} {genre.key}{" "}
                    </span>
                  ))}
                </p>
                <p>{truncateText(movie.plot,300)}</p>
                <p>
                  <strong>Obsada:</strong>
                </p>
                <div className="actor-container">
                  {!!movie.actorList &&
                    movie.actorList.slice(0, 10).map((actor) => (
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
                    lastRatedActions.setLastRated({
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
        )
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
