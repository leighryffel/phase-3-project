import React from "react";
import { ListGroup, Badge, Button } from "react-bootstrap";

function SongEntry({ song, change, setChange }) {
  const { title, length, id, likes } = song;

  function handleLikeClick() {
    const updateSong = {
      likes: song.likes + 1,
    };
    fetch(`http://localhost:9292/songs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateSong),
    }).then(() => setChange(!change))
  }

  return (
    <ListGroup.Item as="li">
      <strong>{title}</strong> {Math.floor(length / 60)}m {length % 60}s{"  "}
      <Badge bg="success">{likes}</Badge>
      {"  "}
      <Button variant="outline-success" onClick={handleLikeClick}>
        💕
      </Button>
    </ListGroup.Item>
  );
}

export default SongEntry;
