import "./RecemendeVideoCard.css";
import { Link } from "react-router-dom";
import { jack, thumbnail1 } from "../../assets";
const RecemendeVideoCard = () => {
  return (
    <Link to={"/video/12"} className="sideVideoList">
      <img src={thumbnail1} alt="thumnail" />
      <div className="video-info ">
        <h3>Beast Channale to learn React js</h3>
        <p>Easy toutoroal</p>
        <span>15k views &bull; 2 days</span>
      </div>
    </Link>
  );
};
export default RecemendeVideoCard;
