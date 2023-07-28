import "./App.css";
import Mainbody from "./components/Body/Mainbody";
import Navbar from "./components/Header/Navbar";
import "@picocss/pico";

function App() {
  return (
    <div className="App" data-theme="light">
      <div id="container">
        <Navbar />
        <Mainbody />
      </div>
    </div>
  );
}

export default App;
