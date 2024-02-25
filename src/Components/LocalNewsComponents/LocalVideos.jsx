import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LocalVideos = () => {
  const API_KEY = "AIzaSyA0VpDJ4Ru6ghjY7jLzaGUPswOhtH0gDn4";
  const PLAYLIST_ID = "PLhrvdvdtQ11ncmofechaxN-2ZRUPaEZeg";
  const [videosData, setVideosData] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchVideos();
    setLoader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchVideos = async () => {
    try {
      const videos = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
      );
      setVideosData(videos.data.items);
    } catch (error) {
      toast.error(error.message)
      navigate("/error")
    }
    
  };

  return loader ? (
    <Loader />
  ) : videosData ? (
    videosData.map((item, index) => (
      <div key={index} className="videobox">
        <iframe
          width="100%"
          height="100%"
          srcDoc={`<style>
          
          * {
          padding: 0;
          margin: 0;
          overflow: hidden;
          }
          
          body, html {
            height: 100%;
          }
          
          img, svg {
            position: absolute;
            width: 100%;
            top: 0;
            bottom: 0;
            margin: auto;
          }
          
          svg {
            filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
            transition: all 250ms ease-in-out;
          }
          
          body:hover svg {
            filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
            transform: scale(1.2);
          }
        </style>
        <a href='https://www.youtube.com/embed/${item.snippet.resourceId.videoId}'>
          <img src='https://img.youtube.com/vi/${item.snippet.resourceId.videoId}/maxresdefault.jpg' alt='${item.snippet.title}'>
          <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
        </a> `}
          src={`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}?si=nZuwSTzNc94tyUSm`}
          title={item.snippet.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    ))
  ) : (
    <h1>No Videos</h1>
  );
};

export default LocalVideos;
