import {
  cameron,
  explore,
  history,
  home,
  jack,
  library,
  megan,
  messages,
  playlist,
  showMore,
  simon,
  subscriprion,
  tom,
} from "../../assets";
import "./SideBar.css";

import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="shorcutLinks">
        <Link to={"/"}>
          <img src={home} alt="home" />
          <p className={`active`}>Home</p>
        </Link>

        <Link to={"/"}>
          <img src={explore} alt="home" />
          <p>Explore</p>
        </Link>

        <Link to={"/"}>
          <img src={subscriprion} alt="home" />
          <p>Subsriprion</p>
        </Link>

        <Link to={"/"}>
          <img src={library} alt="home" />
          <p>Library</p>
        </Link>

        <Link to={"/"}>
          <img src={history} alt="home" />
          <p>History</p>
        </Link>
        <Link to={"/"}>
          <img src={playlist} alt="home" />
          <p>PlayList</p>
        </Link>
        <Link to={"/"}>
          <img src={messages} alt="home" />
          <p>Messages</p>
        </Link>
        <Link to={"/"}>
          <img src={showMore} alt="home" />
          <p>Show more</p>
        </Link>
        <hr />
      </div>
      <div className="subcribedChanels">
        <h3>SUBSCRIBED</h3>
        <Link to={"/"}>
          <img src={jack} alt="user" />
          <p>Jhon doa</p>
        </Link>
        <Link to={"/"}>
          <img src={simon} alt="user" />
          <p>Simon doa</p>
        </Link>

        <Link to={"/"}>
          <img src={tom} alt="user" />
          <p>Tom doa</p>
        </Link>

        <Link to={"/"}>
          <img src={megan} alt="user" />
          <p>Megan doa</p>
        </Link>

        <Link to={"/"}>
          <img src={cameron} alt="user" />
          <p>Cameron doa</p>
        </Link>
      </div>
    </div>
  );
};
export default SideBar;
