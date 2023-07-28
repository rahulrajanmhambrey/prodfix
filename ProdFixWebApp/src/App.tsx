import "./App.css";
import Mainbody from "./components/Body/Mainbody";
import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <div className="App">
      <div id="main-container">
        <Navbar />
        <Mainbody />
      </div>
    </div>
  );
}

export default App;
