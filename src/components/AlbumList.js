import React, { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";
import { CardGroup } from "react-bootstrap";

function AlbumList({ change, setChange }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/albums")
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);

  const albumList = albums.map((album) => (
    <AlbumCard
      key={album.id}
      title={album.title}
      genre={album.genre}
      album_art={album.album_art}
      rating={album.rating}
      released_in={album.released_in}
      id={album.id}
      change={change}
      setChange={setChange}
    />
  ));

  return (
    <div>
      <CardGroup>{albumList}</CardGroup>
    </div>
  );
}

export default AlbumList;
