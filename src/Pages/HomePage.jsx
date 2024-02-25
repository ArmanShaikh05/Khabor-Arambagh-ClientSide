import React, { useEffect } from "react";
import Weather from "../Components/HomePageComponents/Weather";
import YoutubeVideo from "../Components/HomePageComponents/YoutubeVideo";
import News from "../Components/HomePageComponents/News";
import TrendingNews from "../Components/HomePageComponents/TrendingNews";
import InternationalTrending from "../Components/HomePageComponents/InternationalTrending";
import SportsNews from "../Components/HomePageComponents/SportsNews";
import MoviesNews from "../Components/HomePageComponents/MoviesNews";
import TechNews from "../Components/HomePageComponents/TechNews";



const HomePage = () => {


  useEffect(()=>{
    window.scrollTo(0,0)
  })
  
  return (
    <>
      <div >
        <div className="content-wrapper">
          <Weather />
          <YoutubeVideo />
          <News />
          <TrendingNews />
          <InternationalTrending />
        </div>
        <div className="content-wrapper">
          <TechNews />
          <SportsNews />
          <MoviesNews />
        </div>
      </div>
    </>
  );
};

export default HomePage;
