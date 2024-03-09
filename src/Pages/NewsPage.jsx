import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
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

import Loader from "../Components/Loader";

const NewsPage = () => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState([]);
  const [allNewsData, setAllNewsData] = useState([]);
  const [cat, setCat] = useState(["india"]);
  const [catNewsData, setCatNewsData] = useState([]);
  const [updatedAt, setUpdatedAt] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNewsData();
    fecthAllNews();
    fetchCategoryNews();
    setLoader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchNewsData = async () => {
    const data = await axios.get(`${process.env.REACT_APP_SERVER}/news/${id}`);
    if (data) {
      setNewsData(data.data);
      setCat(data.data.category);
      setUpdatedAt(data.data.updatedAt);
      setCreatedAt(data.data.createdAt);
    }
  };

  const fecthAllNews = async () => {
    const allData = await axios.get(
      `${process.env.REACT_APP_SERVER}/news?limit=10`
    );
    if (allData) {
      setAllNewsData(allData.data);
    }
  };

  const fetchCategoryNews = async () => {
    const catData = await axios.get(
      `${process.env.REACT_APP_SERVER}/news/category?category=${
        newsData.category ? newsData.category?.[0] : "india"
      }&limit=4`
    );
    if (catData) {
      setCatNewsData(catData.data);
    }
  };

  return loader ? (
    <Loader />
  ) : (
    <div className="content-wrapper ">
      <div className="news-container">
        <div className="main-news-content">
          <h1 className="news-title">{newsData?.title}</h1>
          <h4 className="news-summary">{newsData?.summary}</h4>

          <div className="update-and-share">
            <p>
              <strong>last updated : </strong>
              {updatedAt
                ? `${format(updatedAt, "d MMM, yyyy h:mm aaaa")}`
                : "N/A"}
            </p>

            <div className="share-options">
              <p>
                <strong>Share on</strong>
              </p>
              <FacebookShareButton
                title={newsData.title}
                url={`${process.env.REACT_APP_FRONTEND_URL}/${newsData._id}`}
              >
                <FacebookIcon size={34} round={true}></FacebookIcon>
              </FacebookShareButton>
              <WhatsappShareButton
                title={newsData.title}
                url={`${process.env.REACT_APP_FRONTEND_URL}/${newsData._id}`}
              >
                <WhatsappIcon size={34} round={true}></WhatsappIcon>
              </WhatsappShareButton>
              <TwitterShareButton
                title={newsData.title}
                url={`${process.env.REACT_APP_FRONTEND_URL}/${newsData._id}`}
              >
                <TwitterIcon size={34} round={true}></TwitterIcon>
              </TwitterShareButton>
              <TelegramShareButton
                title={newsData.title}
                url={`${process.env.REACT_APP_FRONTEND_URL}/${newsData._id}`}
              >
                <TelegramIcon size={34} round={true}></TelegramIcon>
              </TelegramShareButton>
            </div>
          </div>

          <img className="newsImage" src={newsData.image ? newsData.image.url : "" } alt="" />

          <div
            className="news-content"
            dangerouslySetInnerHTML={{ __html: newsData?.content }}
          />

          <p className="createdAt">
            <strong>Published On : </strong>
            {createdAt
              ? ` ${format(createdAt, "d MMM, yyyy h:mm aaaa")}`
              : "N/A"}
          </p>

          <div className="categories">
            <h4>Category:</h4>
            <div className="category-box">
              {cat?.map((item, index) => (
                <h4 className="category-name" key={index}>
                  {item}
                </h4>
              ))}
            </div>
          </div>

          <div className="connect-with-us">
            <a
              className="connect-box whatsapp"
              href="https://wa.me/message/LWTRN55WDQ2LF1"
            >
              <i className="fa-brands fa-whatsapp"></i>
              <p>Connect with us on WhatsApp</p>
            </a>
            <a
              className="connect-box youtube"
              href="https://youtube.com/@khaborarambagh5034?si=G2HJOHLdb10rnqTd"
            >
              <i className="fa-brands fa-youtube"></i>
              <p>Subscribe to our channel</p>
            </a>
            <a
              className="connect-box facebook"
              href="https://www.facebook.com/khaborarmbagh?mibextid=hIlR13"
            >
              <i className="fa-brands fa-facebook"></i>
              <p>Connect with us on Facebook</p>
            </a>
          </div>

          <div className="related-stories">
            <p>More Stories</p>
            <div className="related-stories-box">
              {catNewsData.map((item, index) => (
                <div
                  onClick={() => navigate(`/${item._id}`)}
                  key={index}
                  className="box"
                >
                  <img
                    className="related-img box-img"
                    src={item.image.url}
                    alt=""
                  ></img>
                  <div className="related-data">
                    <div className="box-title">{item.title} </div>
                    <div className="box-desc"> {item.summary}</div>
                  </div>
                  <div
                    className="read-more related-readmore"
                    onClick={() => navigate(`/${item._id}`)}
                  >
                    Read More
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="right-news-content">
          <h2 className="right-news-title">Top Headlines</h2>
          <div className="news-list">
            {allNewsData?.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/${item._id}`)}
                className="news-box"
              >
                <img className="right-newsImage" src={item.image.url} alt="" />
                <div className="news-data">
                  <p className="right-news-summary">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
