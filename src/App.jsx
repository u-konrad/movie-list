import HomePage from "./pages/HomePage/HomePage";
import Layout from "./shared/components/Layout";
import { Switch, Route } from "react-router-dom";
import MoviePage from "./pages/MoviePage/MoviePage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/:movieId" exact>
          <MoviePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
