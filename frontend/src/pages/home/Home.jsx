import { banner } from "../../assets";
import { SideBar, VideoCard } from "../../components";
import "./Home.css";
const Home = () => {
  return (
    <section className="home flex">
      <div className="sidebar">
        <SideBar />
      </div>
      <section className="videos-section">
        <div className="container">
          <div className="banner">
            <img src={banner} alt="banner" />
          </div>
          <div className="videoList">
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
        </div>
      </section>
    </section>
  );
};
export default Home;
