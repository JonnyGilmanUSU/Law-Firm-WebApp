import React from "react";

import NewsSidebar from "../components/News/NewsSidebar";
import News from "../components/News/News";
import axios from "axios";
import { json, useLoaderData } from "react-router-dom";

const NewsPage = () => {
  // Retrieve data from loader and pass to <News /> component below
  const data = useLoaderData();

  return (
    <>
      <NewsSidebar />
      <News items={data} />
    </>
  );
};

export default NewsPage;

// Add loader function here to retrieve all news items
export const newsLoader = async () => {
  try {
    const response = await axios.get("http://localhost:5000/news");
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    //Throw an error so that errorElement is displayed
    throw json({message: "News could not be retrieved"}, {status: 500});
  }
}
