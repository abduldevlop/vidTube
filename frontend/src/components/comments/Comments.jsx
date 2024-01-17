import { dislike, jack, like } from "../../assets";
import "./Comments.css";
import { Link } from "react-router-dom";
const Comments = () => {
  return (
    <div className="oldUserComment">
      <div>
        <img src={jack} alt="" />
      </div>
      <div>
        <div className="userInfoComment">
          <h3>Jack doa</h3>
          <span>2 days ago</span>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
            corporis?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Quibusdam, corporis?
          </p>
          <div className="commentActions">
            <img src={like} alt="like" />
            <span>200</span>
            <img src={dislike} alt="dislike" />
            <span>20</span>
            <span>REPLY</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comments;
