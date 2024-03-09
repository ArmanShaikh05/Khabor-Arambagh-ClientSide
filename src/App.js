import "./App.css";
import "./CSS/mediaQueries.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import NewsPage from "./Pages/NewsPage";
import LocalPage from "./Pages/LocalPage";
import NationalPage from "./Pages/NationalPage";
import WorldNewsPage from "./Pages/WorldNewsPage";
import { Toaster } from "react-hot-toast";
import ErrorPage from "./Pages/ErrorPage";
import LocalSports from "./Components/LocalNewsComponents/LocalSports";
import LocalAllNews from "./Components/LocalNewsComponents/LocalAllNews";
import LocalGaming from "./Components/LocalNewsComponents/LocalGaming";
import LocalEducation from "./Components/LocalNewsComponents/LocalEducation";
import LocalTech from "./Components/LocalNewsComponents/LocalTech";
import LocalEntertainment from "./Components/LocalNewsComponents/LocalEntertainment";
import LocalVideos from "./Components/LocalNewsComponents/LocalVideos";
import NationalAllNews from "./Components/NationalNewsComponents/NationalAllNews";
import NationalSports from "./Components/NationalNewsComponents/NationalSports";
import NationalGaming from "./Components/NationalNewsComponents/NationalGaming";
import NationalEducation from "./Components/NationalNewsComponents/NationalEducation";
import NationalTech from "./Components/NationalNewsComponents/NationalTech";
import NationalEntertainment from "./Components/NationalNewsComponents/NationalEntertainment";
import WorldAllNews from "./Components/WorldNewsComponent/WorldAllNews";
import WorldSports from "./Components/WorldNewsComponent/WorldSports";
import WorldGaming from "./Components/WorldNewsComponent/WorldGaming";
import WorldEducation from "./Components/WorldNewsComponent/WorldEducation";
import WorldTech from "./Components/WorldNewsComponent/WorldTech";
import WorldEntertainment from "./Components/WorldNewsComponent/WorldEntertainment";
import NewsPaper from "./Pages/NewsPaper";
import SinglePaper from "./Components/NewsPaperComponents/SinglePaper";
import SearchNews from "./Components/SearchNews";

function App() {
  return (
    <Router>
      <Header />
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

      </Routes>

      <Toaster />
      <Footer />
    </Router>
  );
}

export default App;
