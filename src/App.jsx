import HomePage from "./pages/HomePage/HomePage";
import Layout from "./shared/components/Layout";
import { Switch, Route } from "react-router-dom";
import MoviePage from "./pages/MoviePage/MoviePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies/:movieId" exact>
          <MoviePage />
        </Route>
        <Route path='*' component={NotFoundPage}/>
      </Switch>
    </Layout>
  );
}

export default App;
