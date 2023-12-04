import "./Featured.css";

import react, { useState, useEffect } from 'react';
import useHttp from "../../hooks/use-http";

import FeaturedItem from "./FeaturedItem";

const Featured = () => {

  //State variable for storing featuredItems
  const [featuredItems, setFeaturedItems] = useState([]);

  // Call the hook
  const {isLoading, error, sendRequest: getFeaturedItems} = useHttp();

  //Load featuredItems when component first loads
  useEffect(() => {
    getFeaturedItems({url: "http://localhost:5000/featuredItems"}, setFeaturedItems);
  }, [getFeaturedItems]);

  let content = "";

  if (featuredItems.length > 0) {
    content =
      <ul className="clearfix">
        {featuredItems.map((item) => {
          return <FeaturedItem itemData={item} key={item.key} />
        })}
      </ul>
  } else if (isLoading) {
    content = <p>Loading...</p>
  } else if (error) {
    content = <p>Oops, something went wrong: {error}</p>
  }

  return (
    <div className="featured">
      <h2>Why Choose Us?</h2>
      {content}
    </div>
  );
};

export default react.memo(Featured);
