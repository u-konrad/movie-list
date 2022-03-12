import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Wrapper from "./MovieListItem.styles";
import genres from "../../../shared/constants/genres";
import { AiFillStar } from "react-icons/ai";

const MovieListItem = ({ movie }) => {
  const history = useHistory();

  const releaseYear = (desc) => desc.match(/\d{4}/);

  return (
    <Wrapper
    data-testid="item"
      className="card rounded shadow p-3 mb-3"
      onClick={() => history.push(`/movies/${movie.id}`)}
    >
      <div className="col-12 col-md-7 mb-3 mb-md-0">
        <h4 className="mb-3">{movie.title}</h4>
        <p className="mb-3">
          Rok: <strong>{releaseYear(movie.description)}</strong>
        </p>
        <p>{movie.plot}</p>
      </div>
      <div className="col-12 col-md-5 d-flex flex-column justify-content-between align-items-end">
        <p className="mb-2">
          <small>IMDbRating:</small>{" "}
          <strong>
            {movie.imDbRating ? (
              <span>
                <AiFillStar style={{ color: "goldenrod" }} /> {movie.imDbRating}
              </span>
            ) : (
              "Brak ocen"
            )}
          </strong>
        </p>
        <p className="text-end genre-container">
          {movie.genreList?.map((genre,index) => (
            <span key={index}>
              {genres[genre.key]}&nbsp;{genre.key}
            </span>
          ))}
        </p>
      </div>
    </Wrapper>
  );
};

export default MovieListItem;
