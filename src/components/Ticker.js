import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

function Ticker({ change }) {
  const [hotSong, setHotSong] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/hottest_song")
      .then((res) => res.json())
      .then((data) => setHotSong(data));
  }, [change]);

  return (
    <div className="marqueeDiv">
      {hotSong ?
      <Marquee
        className="news-scroll"
        pauseOnHover="true"
        speed="130"
        style={{ fontSize: "2em", color: "#0b0074" }}
      >
        🔥 HARRY FANS AGREE - HIS HOTTEST SONG IS {hotSong.title.toUpperCase()}, FROM THE ALBUM {hotSong.album.title.toUpperCase()}! 🔥
      </Marquee>
      :
      null}
    </div>
  );
}

export default Ticker;
