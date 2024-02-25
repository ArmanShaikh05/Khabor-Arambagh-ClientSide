import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import NewsPaperCard from "../Components/NewsPaperComponents/NewsPaperCard";



const NewsPaper = () => {
  const [newspapers, setNewspapers] = useState([]);
  const [loader, setLoader] = useState(true);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    fetchNewspapers();
    setLoader(false);
  },[reducerValue,loader]);

  const fetchNewspapers = async () => {
    const response = await axios.get(`${process.env.SERVER
}/newspaper`);
    setNewspapers(response.data);
  };
  return (
    <div className="content-wrapper newspaper-section ">
      {loader ? (
        <Loader />
      ) : newspapers ? (
        newspapers.map((item, index) => (
          <NewsPaperCard key={index} {...item}  forceUpdate={forceUpdate}/>
        ))
      ) : (
        <h1>No newspapers</h1>
      )}
    </div>
  );
};

export default NewsPaper