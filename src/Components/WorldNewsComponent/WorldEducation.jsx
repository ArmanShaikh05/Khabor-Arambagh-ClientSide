import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappIcon,
  WhatsappShareButton,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
import { useNavigate } from "react-router-dom";

import Loader from "../Loader";

const WorldEducation = () => {
  const [localNews, setLocalNews] = useState([]);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    // setLoader(true)
    fetchLocalNews();
    setLoader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchLocalNews = async () => {
    const localdata = await axios.get(
      `${process.env.REACT_APP_SERVER}/news?category=education`
    );
    if (localdata) {
      setLocalNews(localdata.data);
    }
  };

  return loader ? (
    <Loader />
  ) : localNews ? (
    localNews.map((item, index) => (
      <div
        onClick={() => navigate(`/${item._id}`)}
        key={index}
        className="middle-card"
      >
        <p className="card-title">{item.title}</p>
        <img
          src={item.image.url}
          alt=""
          className="card-image"
        />
        <p className="card-summary">{item.summary}</p>
        <div className="card-details">
          <div className="card-category">
            {item.category.map((item, index) => (
              <h4 key={index} className="category-name">
                {item}
              </h4>
            ))}
          </div>

          <div className="share-options">
            <p>
              <strong>Share on</strong>
            </p>
            <FacebookShareButton
              title={item.title}
              url={`${process.env.REACT_APP_FRONTEND_URL}/${item._id}`}
            >
              <FacebookIcon size={28} round={true}></FacebookIcon>
            </FacebookShareButton>
            <WhatsappShareButton
              title={item.title}
              url={`${process.env.REACT_APP_FRONTEND_URL}/${item._id}`}
            >
              <WhatsappIcon size={28} round={true}></WhatsappIcon>
            </WhatsappShareButton>
            <TwitterShareButton
              title={item.title}
              url={`${process.env.REACT_APP_FRONTEND_URL}/${item._id}`}
            >
              <TwitterIcon size={28} round={true}></TwitterIcon>
            </TwitterShareButton>
            <TelegramShareButton
              title={item.title}
              url={`${process.env.REACT_APP_FRONTEND_URL}/${item._id}`}
            >
              <TelegramIcon size={28} round={true}></TelegramIcon>
            </TelegramShareButton>
          </div>
        </div>
      </div>
    ))
  ) : (
    <h1>No News found!</h1>
  );
};

export default WorldEducation;
