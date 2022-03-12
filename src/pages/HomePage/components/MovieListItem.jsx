import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Wrapper from "./MovieListItem.styles";
import genres from "../../../shared/constants/genres";

const MovieListItem = ({ movie }) => {
  const history = useHistory();

  return (
    <Wrapper
      className="card rounded shadow p-3 mb-3"
      onClick={() => history.push(`/movies/${movie.id}`)}
    >
      <div className="col-7">
        <h4 className="mb-3">{movie.title}</h4>
        <p>{movie.plot}</p>
      </div>
      <div className="d-flex flex-column justify-content-between align-items-end">
        <p className="mb-2">Rating: {movie.imDbRating ?? "Brak ocen"}</p>
        <p>
          {movie.genreList?.map((genre) => (
            <span className="me-1">
              {genres[genre.key]} {genre.key}{" "}
            </span>
          ))}
        </p>
      </div>
    </Wrapper>
  );
};

export default MovieListItem;
