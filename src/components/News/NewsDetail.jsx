import React from "react";
import Main from "../UI/Main/Main";
import { Link } from "react-router-dom";

const NewsDetail = ({ item }) => {
  
	//Use image if set; otherwise, use default children image
  const imagePath = item.image
    ? new URL(`../../assets/images/${item.image}`, import.meta.url).href
    : new URL(`../../assets/images/children.jpg`, import.meta.url).href;

  return (
    <Main>
      <div className="images">
        <img src={imagePath} alt="Img" height="237" width="205" />
      </div>
      <div className="details">
        <p className="info">
          {item.date} <span className="author">{item.author}</span>
        </p>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
		{/* Update link below */}
        <Link to="..">&lt; Back to news</Link>
      </div>
    </Main>
  );
};

export default NewsDetail;
