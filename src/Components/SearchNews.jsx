import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";

const SearchNews = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [newsArray, setNewsArray] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  async function fetchNews() {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_SERVER}/news?search=${search}`
      );
      if (data) {
        setNewsArray(data.data);
      } else {
        navigate("/error");
      }
    } catch (error) {
      navigate("/error");
      toast.error(error.message);
    }
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchNews();
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    navigate(`/${id}`);
  };

  return (
    <div className="content-wrapper search-container">
      <form className="search-box" onSubmit={(e) => handleSearchSubmit(e)}>
        <div className="parent-search">
          <input
            className="search-bar"
            type="text"
            placeholder="Search News"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="clear-search-btn" onClick={(e) => setSearch("")}>
            <i className=" clear-search-icon fa-solid fa-xmark"></i>
          </button>
        </div>
        <button className="search-submit-btn" type="submit">
          Search
        </button>
      </form>

      <div className="search-result-box">
        {newsArray?.map((item, index) =>
          item.image ? (
            <div
              key={index}
              onClick={(e) => handleClick(e, item._id)}
              className="search-result"
            >
              <img
                className="box-img"
                src={item.image.url}
                alt={item.title}
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

export default SearchNews;
