import React, {useState, useEffect} from 'react'
import Marquee from 'react-fast-marquee';

function StatsMenu({ change }) {
  const [hotSong, setHotSong] = useState("")

  useEffect(() => {
    fetch("http://localhost:9292/hottest_song")
      .then((res) => res.json())
      .then((data) => setHotSong(data));
  }, []);

  return (
    <div className="marqueeDiv">
      <Marquee
        className="news-scroll"
        pauseOnHover="true"
        speed="130"
        style={{fontSize: '2em', color: '#0b0074'}}
      >
      {/* 🔥 HARRY FANS AGREE: HIS HOTTEST SONG IS {hotSong.title}, FROM {hotSong.album.title}! 🔥 */}
      </Marquee>
    </div>
  )
}

export default StatsMenu