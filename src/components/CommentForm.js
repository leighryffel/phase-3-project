import React, { useState } from "react";

function CommentForm({ album_id, change, setChange }) {
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: comment,
        album_id: album_id,
      }),
    }).then(() => setChange(!change));
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="comment"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        placeholder="Add a comment..."
        className="input-text"
      />{" "}
      <input type="submit" name="submit" value="Post" className="submit" />
    </form>
  );
}

export default CommentForm;
