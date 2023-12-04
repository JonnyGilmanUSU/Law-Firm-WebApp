import React from "react";
import NewsSidebar from "../components/News/NewsSidebar";
import NewsDetail from "../components/News/NewsDetail";
import { json, useLoaderData } from "react-router-dom";
import axios from "axios";

const NewsDetailPage = () => {
  // Retrieve data from loader and pass to <NewsDetail /> component below
  const data = useLoaderData();

  return (
    <>
      <NewsSidebar />
      <NewsDetail item={data} />
    </>
  );
};

export default NewsDetailPage;

// Add loader function here to retrieve single news item
export const newsDetailLoader = async ({params, request}) => {
  //const {newsId} = params;
  const newsId = params.newsId;
  try {
    const response = await axios.get("http://localhost:5000/news/" + newsId);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    //Throw an error so that errorElement is displayed
    throw json({message: "News item could not be retrieved"}, {status: 500});
  }
}