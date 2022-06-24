import React, { useState, useEffect } from "react";
import SongEntry from "./SongEntry";
import { ListGroup } from "react-bootstrap";

function SongList({ album_id, change, setChange }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/songs/album/${album_id}`)
      .then((res) => res.json())
      .then((data) => setSongs(data));
  }, [change]);

  const songList = songs.map((song) => (
    <SongEntry
      key={song.id}
      song={song}
      change={change}
      setChange={setChange}
    />
  ));

  return (
    <div id="song">
      <ListGroup as="ol" numbered>
        {songList}
      </ListGroup>
    </div>
  );
}

export default SongList;
