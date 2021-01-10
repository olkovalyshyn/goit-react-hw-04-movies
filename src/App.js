import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Appbar from "./components/AppBar/AppBar";
// import FindResult from "./views/FindResult/FindResult";
// import HomePage from "./components/HomePage/HomePage";
// import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage";

const HomePage = lazy(() =>
  import("./components/HomePage/HomePage.js" /* webpackChunkName: "HomePage" */)
);
const FindResult = lazy(() =>
  import(
    "./views/FindResult/FindResult.js" /* webpackChunkName: "FindResult" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage.js" /* webpackChunkName: "MovieDetailsPage" */
  )
);

function App() {
  return (
    <>
      <Appbar />
      <Suspense fallback={<div>...LOADING...</div>}>
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
      </Suspense>
    </>
  );
}

export default App;
