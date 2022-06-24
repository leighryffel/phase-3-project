import React, { useState } from "react";
import SongList from "./SongList";
import CommentList from "./CommentList";
import { Card, Button } from "react-bootstrap";

function AlbumCard({
  title,
  genre,
  album_art,
  rating,
  released_in,
  id,
  change,
  setChange,
}) {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle((toggle) => !toggle);
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={album_art} alt={title} />
      <Card.Body>
        <Card.Title>
          <strong>{title}</strong>
        </Card.Title>
        <Card.Text>Released: {released_in}</Card.Text>
        <Card.Text>Genre: {genre}</Card.Text>
        <Card.Text>Leigh's Rating: {"⭐ ".repeat(rating)}</Card.Text>
        <hr></hr>
        <CommentList change={change} setChange={setChange} album_id={id} />
        <hr></hr>
        <Button variant="outline-success" onClick={handleClick}>
          {toggle ? "Hide Songs" : "View Songs"}
        </Button>{" "}
        {toggle ? (
          <SongList album_id={id} change={change} setChange={setChange} />
        ) : null}
      </Card.Body>
    </Card>
  );
}

export default AlbumCard;
