import React, { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

function CommentList({ album_id, change, setChange }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/comments/album/${album_id}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [change]);

  const commentList = comments.map((comment) => (
    <CommentCard
      change={change}
      setChange={setChange}
      key={comment.id}
      id={comment.id}
      comment={comment.comment}
    />
  ));

  return (
    <div>
      <h4>Comments</h4>
      {commentList}
      <CommentForm album_id={album_id} change={change} setChange={setChange} />
    </div>
  );
}

export default CommentList;
