import React, { useEffect, useState, useCallback } from "react";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import MovieListItem from "./components/MovieListItem";
import useHttp from "../../shared/hooks/use-http";
import Notification from "../../shared/components/Notification";
import SearchInput from "./components/SearchInput";
import cinemaImg from "../../assets/images/cinema.jpg";
import Wrapper from "./HomePage.styles";
import { useDispatch, useSelector } from "react-redux";
import { searchResultsActions } from "../../store/store";

const url = `https://imdb-api.com/API/AdvancedSearch/${process.env.REACT_APP_API_KEY}?title_type=feature,tv_movie&title=`;

const HomePage = () => {
  const { fetchData, isLoading } = useHttp();
  const [isError, setError] = useState(false);
  const [enteredQuery, setEnteredQuery] = useState("");
  const { query, movieList } = useSelector((state) => state.searchResults);
  const dispatch = useDispatch();

  const fetchMoviesByTitle = useCallback(
    async (title = "") => {
      try {
        const response = await fetchData(url + title);
        if (!response.results) {
          throw new Error("No movies");
        }
        dispatch(
          searchResultsActions.addNewList({
            query:title,
            movieList: response.results,
          })
        );
      } catch (err) {
        console.log(err);
        setError(true);
      }
    },
    [fetchData, setError, dispatch]
  );

  useEffect(() => {
    if (!movieList.length) {
      fetchMoviesByTitle();
    }
  }, [fetchMoviesByTitle, movieList]);

  useEffect(() => {
    setEnteredQuery(query);
  }, [query]);

  const querySubmitHandler = async (e) => {
    e.preventDefault();
    if (enteredQuery.length > 3) {
      fetchMoviesByTitle(enteredQuery);
    }
  };

  return (
    <Wrapper>
      <div className="position-relative  mb-3">
        <div className="img-container">
          <img className="hero-img shadow rounded" src={cinemaImg} alt="" />
        </div>
        <div className="position-absolute search-input">
          <h1>
            <span style={{ fontWeight: 300 }}>Movie</span>Finder
          </h1>
          <SearchInput
            className="my-4"
            placeholder="Szukaj filmów..."
            query={enteredQuery}
            onQueryChange={(e) => setEnteredQuery(e.target.value)}
            onQuerySubmit={querySubmitHandler}
            submitDisabled={enteredQuery.length < 3}
          />
        </div>
      </div>
      <div style={{ position: "relative" }}>
        {isLoading ? (
          <LoadingSpinner />
        ) : !isError ? (
          !!movieList && (
            <ul>
              {movieList.map((movie, index) => (
                <MovieListItem key={index} movie={movie} />
              ))}
            </ul>
          )
        ) : (
          <p className="display text-muted">Nie udało się pobrać filmów.</p>
        )}
      </div>
      <Notification />
    </Wrapper>
  );
};

export default HomePage;
