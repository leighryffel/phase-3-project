import React from "react";

function CommentCard({ comment, id, change, setChange }) {
  function handleDeleteClick() {
    fetch(`http://localhost:9292/comments/${id}`, {
      method: "DELETE",
    }).then(() => setChange(!change));
  }

  return (
    <div>
      <p>
        🗣️ {comment} <button onClick={handleDeleteClick}>X</button>{" "}
      </p>
    </div>
  );
}

export default CommentCard;
