import React from "react";

const PostItem = ({ post: { title, body } }) => {
  return (
    <div
      className="post-item"
      style={{ border: "2px solid black", margin: "12px" }}
    >
      <h2>{title} </h2>
      <p>{body} </p>
    </div>
  );
};

export default PostItem;
