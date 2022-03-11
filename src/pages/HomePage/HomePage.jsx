import React, { Fragment, useEffect, useState } from "react";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import MovieListItem from "./components/MovieListItem";
import useHttp from "../../shared/hooks/use-http";
import Notification from "../../shared/components/Notification";

const url =
  "https://imdb-api.com/API/AdvancedSearch/k_x62pdsfe?title_type=feature,tv_movie&release_date=2020-03-11,2022-03-11&sort=release_date,desc";
const oldkey = "k_z7fjidj6";
const newkey = "k_x62pdsfe";

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);
  const { fetchData, isLoading } = useHttp();
  const [isError, setError] = useState(false);

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

  return (
    <Fragment>
      <h1>MovieFinder</h1>
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
    </Fragment>
  );
};

export default HomePage;
