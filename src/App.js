import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Appbar from "./components/AppBar/AppBar";
import MoviesPage from "./components/MoviesPage/MoviesPage";
import HomePage from "./components/HomePage/HomePage";
import MovieDetailsPage from "./views/MovieDetailsPage";

function App() {
  return (
    <>
      <Appbar />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
