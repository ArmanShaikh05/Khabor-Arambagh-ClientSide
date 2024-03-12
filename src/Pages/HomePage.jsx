import React, { Suspense, lazy, useEffect } from "react";
import Weather from "../Components/HomePageComponents/Weather";
import YoutubeVideo from "../Components/HomePageComponents/YoutubeVideo";
import { ErrorBoundary } from "react-error-boundary";
import Loader from "../Components/Loader";
import ErrorPage from "./ErrorPage";

const News = lazy(() => import("../Components/HomePageComponents/News"));
const TrendingNews = lazy(() =>
  import("../Components/HomePageComponents/TrendingNews")
);
const InternationalTrending = lazy(() =>
  import("../Components/HomePageComponents/InternationalTrending")
);
const SportsNews = lazy(() =>
  import("../Components/HomePageComponents/SportsNews")
);
const MoviesNews = lazy(() =>
  import("../Components/HomePageComponents/MoviesNews")
);
const TechNews = lazy(() =>
  import("../Components/HomePageComponents/TechNews")
);

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="content-wrapper">
      <Weather />
      <YoutubeVideo />
      <ErrorBoundary FallbackComponent={ErrorPage} >
        <Suspense fallback={<Loader />}>
          <News />
          <TrendingNews />
          <InternationalTrending />
          <TechNews />
          <SportsNews />
          <MoviesNews />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default HomePage;
