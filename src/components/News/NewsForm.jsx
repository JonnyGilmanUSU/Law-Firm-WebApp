import React from "react";
import Main from "../UI/Main/Main";
import "./NewsForm.css";

const NewsForm = () => {
  return (
    <Main>
      <h1>Add News Item</h1>
      <p>Add a new news item below:</p>

      <form method="post" className="message">
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" />
        <label htmlFor="date">Date</label>
        <input type="text" name="date" id="date" />
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="content">Content</label>
        <textarea name="content" id="content"></textarea>
        <input type="submit" value="Send Message" />
      </form>
    </Main>
  );
};

export default NewsForm;
