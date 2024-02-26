import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const SportsNews = () => {

  
    const [newsArray, setNewsArray] = useState([]);
    const navigate = useNavigate()
  
    useEffect(() => {
      fetchNews("Sports");
    }, []);
  
    async function fetchNews(query) {
      try {
        const data = await axios.get(`${process.env.REACT_APP_SERVER
}/news/category?category=${query}&limit=20`);
        setNewsArray(data.data);
      } catch (error) {
        navigate("/error");
        toast.error(error.message);
      }
    }

    const handleClick = (e,id) => {
      e.preventDefault()
      navigate(`/${id}`)
    }
  
    return (
      <div className="content-box2">
        <div className="content-title" id='sportsNews'>Sports News</div>
        <div className="news-boxes-2 custom-scroolbar" id="news-boxes-2">
  
          {newsArray?.map((item,index)=>(
              item.image ? 
              <div key={index} onClick={(e)=>handleClick(e,item._id)} className="box">
                  <img className="box-img" src={`${process.env.REACT_APP_SERVER
}/${item.image}`} alt=""></img>
                  <div className="box-title">{item.title} </div>
                  <div className="box-desc"> {item.summary}</div>
                  <div className="read-more">Read More</div>
              </div> :  null
          ))}
        </div>
      </div>
    );
}

export default SportsNews