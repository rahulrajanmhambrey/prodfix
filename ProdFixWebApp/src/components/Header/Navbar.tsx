import "./navbar.css";
import logo from "./prodfix.png";
import userImage from "./User Image.png";
import "@picocss/pico";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li id="logo">
          <img src={logo} />
        </li>
      </ul>
      <ul>
        <li>
          {" "}
          <input type="text" placeholder="Search tasks"></input>
        </li>
      </ul>
      <ul>
        <li id="user">
          {" "}
          <img src={userImage} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
