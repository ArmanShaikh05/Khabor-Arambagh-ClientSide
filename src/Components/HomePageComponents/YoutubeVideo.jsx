import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const YoutubeVideo = () => {

  const [videosData, setVideosData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchVideos = async () => {
    try {
      const videos = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=4&playlistId=${process.env.REACT_APP_YOUTUBE_PLAYLIST_ID}&key=${process.env.REACT_APP_YOUTUBE_API}`
      );
      setVideosData(videos.data.items);
    } catch (error) {
      toast.error(error.message);
      navigate("/error");
    }
  };

  return (
    <div className="content-box-1">
      <div className="content-title">
        Welcome to <span>KhaborArambagh.com</span>
      </div>
      <div className="news-boxes">
        <div className="outerbox1">
          <iframe
            src={`https://www.youtube.com/embed/GpvQhc3KSuc?si=JB1yGk8V8fOUjPdE? &mute=1 `}
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
                              <a href='https://www.youtube.com/embed/GpvQhc3KSuc'>
                                <img src='https://img.youtube.com/vi/GpvQhc3KSuc/maxresdefault.jpg' alt='Khabor Arambagh '>
                                <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
                              </a> `}
            title="YouTube video player"
            allow="accelerometer; ; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          />
        </div>

        <div className="outerbox2">
          {videosData
            ? videosData.map((item, index) => (
                <div key={index} className="box">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`}
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
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen=""
                  />
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideo;
