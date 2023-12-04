import React from "react";
import NewsSidebar from "../components/News/NewsSidebar";
import NewsForm from "../components/News/NewsForm";
import { json, redirect } from "react-router-dom";
import axios from "axios";

const AddNewsPage = () => {
  return (
    <>
      <NewsSidebar />
      <NewsForm />
    </>
  );
};

export default AddNewsPage;

// Add action function here to insert a new news item and redirect back to /news

export const addNewsAction = async ({request, params}) => {
  const data = await request.formData();

  console.log("Data is: ", data);

  const newsData = {
    title: data.get("title"),
    author: data.get("author"),
    date: data.get("date"),
    content: data.get("content")
  }

  const response = await axios.post ("http://localhost:5000/news", newsData);

  console.log("Response is: ", response);

  if (response.status !== 201) {
    throw json({message: "Could not save news item"}, {status: 500});
  }

  return redirect("/news");
}