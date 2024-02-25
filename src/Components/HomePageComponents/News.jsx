import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const News = () => {
  const [newsArray, setNewsArray] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    try {
      const data = await axios.get(`${process.env.SERVER}/news?limit=20`);
      setNewsArray(data.data);
    } catch (error) {
      navigate("/error");
      toast.error(error.message);
    }
  }

  const handleClick = (e, id) => {
    e.preventDefault();
    navigate(`/${id}`);
  };

  return (
    <div className="content-box2">
      <div className="content-title">News</div>
      <div className="news-boxes-2 custom-scroolbar" id="news-boxes-2">
        {newsArray?.map((item, index) =>
          item.image ? (
            <div
              key={index}
              onClick={(e) => handleClick(e, item._id)}
              className="box"
            >
              <img
                className="box-img"
                src={`${process.env.SERVER}/${item.image}`}
                alt=""
              ></img>
              <div className="box-title">{item.title} </div>
              <div className="box-desc"> {item.summary}</div>
              <div className="read-more">Read More</div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default News;
