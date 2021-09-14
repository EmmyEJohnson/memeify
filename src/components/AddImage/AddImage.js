//This is probably the Post Form 

import React, { useState } from 'react';
import axios from 'axios';

const AddPostImage = () => {
  const [author, setAuthor] = useState("");
  const [caption, setCaption] = useState("");
  const [comments, setComments] = useState("");
  const [fileName, setFileName] = useState("");

  const onChangeFile = e => {
    setFileName(e.target.file[0]);
  }

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();
      
    formData.append("author", author);
    formData.append("caption", caption);
    formData.append("comments", comments);
    formData.append("postImage", fileName);
    
    setAuthor("");
    setCaption("");
    setComments("");

    axios
      .post("/posts/add", formData)
      .then((res) => setComments(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="img-Container">
      <h1>Add New Post</h1>
      <span className="caption">{caption}</span>
      <form onSubmit={changeOnClick} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="author"> Author Name </label>
          <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="form-control"
          placeholder="User Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="caption"> Caption </label>
          <input
          type="text"
          value={caption}
          onChange={(e) => setAuthor(e.target.value)}
          className="form-control"
          placeholder="User Name"
          />
        </div>
        </form>
  )
}