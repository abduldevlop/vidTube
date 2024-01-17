import { jack, thumbnail1 } from "../../assets";
import "./video_card.css";
import { Link } from "react-router-dom";
const VideoCard = ({ type }) => {
  return (
    <Link to={"/video/12"} className={"video"}>
      <img src={thumbnail1} alt="thumnail" className="thumbanil" />
      <div className="flex">
        <img src={jack} alt="user-img" />
        <div className="video-info flex">
          <h3>Beast Channale to learn React js</h3>
          <p>Easy toutoroal</p>
          <span>15k views &bull; 2 days</span>
        </div>
      </div>
    </Link>
  );
};
export default VideoCard;
