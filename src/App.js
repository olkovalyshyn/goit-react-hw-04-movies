import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Appbar from "./components/AppBar/AppBar";
import FindResult from "./views/FindResult/FindResult";
import HomePage from "./components/HomePage/HomePage";
import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage";

function App() {
  return (
    <>
      <Appbar />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <FindResult />
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
