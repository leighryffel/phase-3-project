import NavBar from "./NavBar";
import Ticker from "./Ticker";
import AlbumList from "./AlbumList";
import FunBar from "./FunBar";
import Footer from "./Footer";
import React, { useState } from "react";

function App() {
  const [change, setChange] = useState(false);

  return (
    <div className="allApp">
      <div>
        <NavBar />
        <Ticker change={change} />
        <AlbumList change={change} setChange={setChange} />
      </div>
      <div>
        <FunBar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
