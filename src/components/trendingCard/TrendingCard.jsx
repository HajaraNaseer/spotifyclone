import React from "react";
import "./trendingCard.css";
import { TrendingCardData } from "../../config/Config.js";

const TrendingCard = ({setCurrentPage,setCurrentEle}) => {
  return (
    <>
      <div className='trendingCardMainContainer'>
        {TrendingCardData.map((ele,id) => {
          return (
            <>
              <div className="cardContainer">
                <img src={ele.imgSrc} alt="" />
                <div key={id}
                  onClick={() => {
                    setCurrentPage("musicSpecificPage");
                    setCurrentEle(ele)
                  }}
                  className="CardTextContainer"
                >
                  <h2>{ele.heading}</h2>
                  <p>{ele.subheading}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TrendingCard;
