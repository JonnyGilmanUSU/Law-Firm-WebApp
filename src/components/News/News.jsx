import React from "react";
import Main from "../UI/Main/Main";
import "./News.css";
import { Link } from "react-router-dom";

const News = ({ items }) => {
  return (
    <Main>
      <h1>News</h1>
      <ul className="news">
        {items.map((item) => {
          //Use image if set; otherwise, use default children image
          const imagePath = item.image
            ? new URL(`../../assets/images/${item.image}`, import.meta.url).href
            : new URL(`../../assets/images/children.jpg`, import.meta.url).href;

          return (
            <li key={item.id}>
              <div className="box">
                <img src={imagePath} alt="Img" height="245" width="213" />
              </div>
              <p className="info">
                {item.date} by
                <span className="author">{item.author}</span>
              </p>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              {/* Update link below */}
              <Link to={item.id.toString()} className="more">
                Read More
              </Link>
            </li>
          );
        })}
      </ul>
    </Main>
  );
};

export default News;
