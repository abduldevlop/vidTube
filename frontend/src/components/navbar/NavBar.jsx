import { Link } from "react-router-dom";
import {
  jack,
  logo,
  menu,
  more,
  notification,
  search,
  upload,
  voiceSearch,
} from "../../assets";
import "./NavBar.css";

const NavBar = () => {
  const user = false;
  return (
    <nav className="nav-bar flex">
      {/* left nav */}
      <div className="nav-left flex">
        <img src={menu} alt="menu" />
        <Link to={"/"}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>

      {/* ceanter nav */}
      <div className="nav-center flex">
        <div className="searchBox flex">
          <input type="text" placeholder="Search" />
          <img src={search} alt="seacrh" />
        </div>
        <img src={voiceSearch} alt="voice" />
      </div>

      {/* right nav */}
      <div className="nav-right flex">
        <img src={upload} alt="upload" />
        <img src={more} alt="more" />
        <img src={notification} alt="notification" />
        {user ? (
          <img src={jack} alt="user-img" className="userIcon" />
        ) : (
          <Link to={"/auth/signin"} className="signinBtn">
            <span>Sign in</span>
          </Link>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
