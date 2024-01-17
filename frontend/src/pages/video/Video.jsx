import { Link } from "react-router-dom";
import { dislike, jack, like, save, share, video } from "../../assets";
import RecemendeVideoCard from "../../components/recemendet_video_card/RecemendeVideoCard";
import "./Video.css";
import { Comments } from "../../components";
import { useState } from "react";
const Video = () => {
  const [commentsOpen, setCommentsOpen] = useState(false);
  return (
    <section className="container playContainer">
      <div className="row">
        {/* video play section  */}
        <div className="playVideo">
          <video controls autoPlay>
            <source src={video} type="video/mp4" />
          </video>
          <div className="tags">
            <Link to={"/"}>#Coding</Link>
            <Link to={"/"}>#javaScript</Link>
            <Link to={"/"}>#TypScript</Link>
          </div>
          <h3>Best video to learn mern stack developement!</h3>

          {/* video rections  */}
          <div className="reactions flex">
            <p>12334 Views &bull; 2 days ago </p>
            <div className="activity flex">
              <Link to={"/"}>
                <img src={like} alt="like" />
                <span>125</span>
              </Link>
              <Link to={"/"}>
                <img src={dislike} alt="like" />
                <span>15</span>
              </Link>
              <Link to={"/"}>
                <img src={share} alt="like" />
                <span>Share</span>
              </Link>
              <Link to={"/"}>
                <img src={save} alt="like" />
                <span>Save</span>
              </Link>
            </div>
          </div>
          <hr />

          {/* publisher info  */}

          <div className="publisher flex">
            <img src={jack} alt="" />
            <div>
              <p>Easy Tutorials</p>
              <span>500k Subscribers</span>
            </div>
            <button type="button">Subscibe</button>
          </div>

          {/* description section  */}

          <div className="decs">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              atque explicabo. Dolore, aliquid sapiente error alias nisi
              exercitationem culpa mollitia!
            </p>
          </div>
          <hr />
          <div className="comments">
            <div className="addComment">
              <img src={jack} alt="" />
              <input type="text" placeholder="Write Comments" />
            </div>
            <h4 onClick={() => setCommentsOpen((prev) => !prev)}>
              134 Comments..
            </h4>

            {commentsOpen && <Comments />}
          </div>
        </div>

        {/* right sidebar */}
        <div className="rightSide">
          <RecemendeVideoCard />
          <RecemendeVideoCard />
          <RecemendeVideoCard />
          <RecemendeVideoCard />
          <RecemendeVideoCard />
          <RecemendeVideoCard />
          <RecemendeVideoCard />
          <RecemendeVideoCard />
          <RecemendeVideoCard />
          <RecemendeVideoCard />
          <RecemendeVideoCard />
          <RecemendeVideoCard />
        </div>
      </div>
    </section>
  );
};
export default Video;
