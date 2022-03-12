import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import MovieListItem from "./components/MovieListItem";
import useHttp from "../../shared/hooks/use-http";
import Notification from "../../shared/components/Notification";
import SearchInput from "./components/SearchInput";
import cinemaImg from "../../assets/images/cinema.jpg";
import Wrapper from "./HomePage.styles";

const url =
  "https://imdb-api.com/API/AdvancedSearch/k_x62pdsfe?title_type=feature,tv_movie&release_date=2020-03-11,2022-03-11&sort=release_date,desc";
const oldkey = "k_z7fjidj6";
const newkey = "k_x62pdsfe";

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);
  const { fetchData, isLoading } = useHttp();
  const [isError, setError] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchLatestMovies = async () => {
      try {
        const response = await fetchData(url);
        setMovieList(response.results);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };

    fetchLatestMovies();
  }, [fetchData, setMovieList, setError]);

  const querySubmitHandler = (e) => {
    e.preventDefault();
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
            query={query}
            onQueryChange={(e) => setQuery(e.target.value)}
            onQuerySubmit={querySubmitHandler}
          />
        </div>
      </div>
      <div style={{ position: "relative" }}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div>
            {movieList.map((movie) => (
              <MovieListItem movie={movie} />
            ))}
          </div>
        )}
      </div>
      <Notification />
    </Wrapper>
  );
};

export default HomePage;
