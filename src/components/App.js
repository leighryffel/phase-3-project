import NavBar from "./NavBar";
import StatsMenu from "./StatsMenu";
import AlbumList from "./AlbumList";
import FunBar from "./FunBar";

function App() {
  return (
    <div className="allApp">
      <div>
        <NavBar />
        <StatsMenu />
        <AlbumList />
      </div>
      <div>
        <FunBar />
      </div>
    </div>
  );
}

export default App;
