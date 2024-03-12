import "./App.css";
import "./CSS/mediaQueries.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";
import Loader from "./Components/Loader";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ErrorPage from "./Pages/ErrorPage";
import { ErrorBoundary } from "react-error-boundary";

const HomePage = lazy(() => import("./Pages/HomePage"));
const NewsPage = lazy(() => import("./Pages/NewsPage"));
const LocalPage = lazy(() => import("./Pages/LocalPage"));
const NationalPage = lazy(() => import("./Pages/NationalPage"));
const WorldNewsPage = lazy(() => import("./Pages/WorldNewsPage"));
const LocalSports = lazy(() =>
  import("./Components/LocalNewsComponents/LocalSports")
);
const LocalAllNews = lazy(() =>
  import("./Components/LocalNewsComponents/LocalAllNews")
);
const LocalGaming = lazy(() =>
  import("./Components/LocalNewsComponents/LocalGaming")
);
const LocalEducation = lazy(() =>
  import("./Components/LocalNewsComponents/LocalEducation")
);
const LocalTech = lazy(() =>
  import("./Components/LocalNewsComponents/LocalTech")
);
const LocalEntertainment = lazy(() =>
  import("./Components/LocalNewsComponents/LocalEntertainment")
);
const LocalVideos = lazy(() =>
  import("./Components/LocalNewsComponents/LocalVideos")
);
const NationalAllNews = lazy(() =>
  import("./Components/NationalNewsComponents/NationalAllNews")
);
const NationalSports = lazy(() =>
  import("./Components/NationalNewsComponents/NationalSports")
);
const NationalGaming = lazy(() =>
  import("./Components/NationalNewsComponents/NationalGaming")
);
const NationalEducation = lazy(() =>
  import("./Components/NationalNewsComponents/NationalEducation")
);
const NationalTech = lazy(() =>
  import("./Components/NationalNewsComponents/NationalTech")
);
const NationalEntertainment = lazy(() =>
  import("./Components/NationalNewsComponents/NationalEntertainment")
);
const WorldAllNews = lazy(() =>
  import("./Components/WorldNewsComponent/WorldAllNews")
);
const WorldSports = lazy(() =>
  import("./Components/WorldNewsComponent/WorldSports")
);
const WorldGaming = lazy(() =>
  import("./Components/WorldNewsComponent/WorldGaming")
);
const WorldEducation = lazy(() =>
  import("./Components/WorldNewsComponent/WorldEducation")
);
const WorldTech = lazy(() =>
  import("./Components/WorldNewsComponent/WorldTech")
);
const WorldEntertainment = lazy(() =>
  import("./Components/WorldNewsComponent/WorldEntertainment")
);
const NewsPaper = lazy(() => import("./Pages/NewsPaper"));
const SinglePaper = lazy(() =>
  import("./Components/NewsPaperComponents/SinglePaper")
);
const SearchNews = lazy(() => import("./Components/SearchNews"));
const PrivacyPolicy = lazy(() =>
  import("./Components/FooterComponents/PrivacyPolicy")
);
const AboutUs = lazy(() => import("./Components/FooterComponents/AboutUs"));
const TermsOfUse = lazy(() =>
  import("./Components/FooterComponents/TermsOfUse")
);
const Advertise = lazy(() => import("./Components/FooterComponents/Advertise"));
const ParentialGuidance = lazy(() =>
  import("./Components/FooterComponents/ParentialGuidance")
);
const AccessiblityHelp = lazy(() =>
  import("./Components/FooterComponents/AccessiblityHelp")
);

function App() {
  return (
    <Router>
      <Header />
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/:id" element={<NewsPage />}></Route>
            <Route path="/error" element={<ErrorPage />}></Route>

            {/* USING NESTED ROUTING */}
            <Route path="/localnews/" element={<LocalPage />}>
              <Route index element={<LocalAllNews />} />
              <Route path="sports" element={<LocalSports />} />
              <Route path="gaming" element={<LocalGaming />} />
              <Route path="education" element={<LocalEducation />} />
              <Route path="technology" element={<LocalTech />} />
              <Route path="entertainment" element={<LocalEntertainment />} />
              <Route path="videos" element={<LocalVideos />} />
            </Route>

            {/* USING NESTED ROUTING */}
            <Route path="/nationalnews/" element={<NationalPage />}>
              <Route index element={<NationalAllNews />} />
              <Route path="sports" element={<NationalSports />} />
              <Route path="gaming" element={<NationalGaming />} />
              <Route path="education" element={<NationalEducation />} />
              <Route path="technology" element={<NationalTech />} />
              <Route path="entertainment" element={<NationalEntertainment />} />
            </Route>

            {/* USING NESTED ROUTING */}
            <Route path="/worldnews/" element={<WorldNewsPage />}>
              <Route index element={<WorldAllNews />} />
              <Route path="sports" element={<WorldSports />} />
              <Route path="gaming" element={<WorldGaming />} />
              <Route path="education" element={<WorldEducation />} />
              <Route path="technology" element={<WorldTech />} />
              <Route path="entertainment" element={<WorldEntertainment />} />
            </Route>

            <Route path="/newspaper" element={<NewsPaper />}></Route>

            <Route path="/newspaper/:id" element={<SinglePaper />}></Route>

            <Route path="/search" element={<SearchNews />}></Route>

            {/* FOOTER ROUTES */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/guidance" element={<ParentialGuidance />} />
            <Route path="/accessibility" element={<AccessiblityHelp />} />

            <Route
              path="/*"
              element={<ErrorPage message={"ERROR 404 PAGE NOT FOUND"} />}
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>

      <Toaster />
      <Footer />
    </Router>
  );
}

export default App;
