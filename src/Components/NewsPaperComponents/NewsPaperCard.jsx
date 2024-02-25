import { format } from "date-fns";
import React from "react";
import { useNavigate } from "react-router-dom";

const NewsPaperCard = ({ index, title, createdAt, _id}) => {

    const navigate = useNavigate()

  return (
    <>
      <div key={index}  className="newspaper-card" onClick={(e)=>navigate(`/newspaper/${_id}`)} >
        <div className="newspaper-details">
          <i className="fa-solid fa-file fa-2x"></i>
          <div className="newspaper-titles">
            <h3 className="newspaper-title">{title}</h3>
            <h5 className="newspaper-title">
              {createdAt ? format(createdAt, "d MMM, yyyy") : "N/A"}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPaperCard;
