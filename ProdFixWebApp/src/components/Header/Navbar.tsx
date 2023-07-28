import "./navbar.css";
import logo from "./prodfix.png";
import userImage from "./User Image.png";
const Navbar = () => {
  return (
    <div id="main-header-container" className="flex-container">
      <div id="logo">
        <img src={logo} />
      </div>
      <div id="search-bar">
        <input type="text" placeholder="Search tasks"></input>
      </div>
      <div id="user">
        <img src={userImage} />
      </div>
    </div>
  );
};

export default Navbar;
