import "./Profile.scss";
import m from "./mount.jpg";
import im from "./k44.jpg";
import ErrorIcon from "@mui/icons-material/Error";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const Profile = () => {
  return (
    <div className="profile">
      <div className="card" style={{ height: "100vh", width: "18rem" }}>
        <img src={m} className="card-img-top" alt="..." />
        <div className="profilecontainer">
          <div className="img1">
            <img src={im} alt="" />
          </div>
          <div className="profilename">
            <span className="fristname">Jennifer Bennet</span>
            <span className="lastname">Product Designer</span>
          </div>
        </div>
        <div className="followercontaner">
          <div className="products">
            <span className="numcontain">1,296</span>
            <span className="productcontain">Products</span>
          </div>
          <div className="follower">
            <span className="mainfollower">5.2k</span>
            <span className="followercontain">Followers</span>
          </div>
        </div>
        <hr />
        <div className="head">
          <span className="user1">Earnings</span>
          <span className="week">
            <ErrorIcon />
          </span>
        </div>
        <div className="circular">
          <div className="progres">
            <SemiCircleProgressBar
              percentage={76}
              color="blue"
              showPercentValue
            />
          </div>
          <div className="info">
            <span className="nums">$26,256</span>
            <span className="earnings">Earning this month</span>
          </div>
          <div className="increse">
            <span className="val">
              <AddRoundedIcon className="icon" />
              2.65%
            </span>
            <span className="content">From previous Period</span>
          </div>
          <hr />
          <div className="head">
            <span className="user1">Recently Activity</span>
            <span className="week">{/* <ErrorIcon /> */}</span>
          </div>

          <div className="activity">
            <div className="date">
              <span className="todaydate">12</span>
              <span className="month">Sep</span>
            </div>
            <div className="contentt">
              Responded to need "vuleenter Activities"
            </div>
          </div>
          <div className="activity">
            <div className="date">
              <span className="todaydate">11</span>
              <span className="month">Sep</span>
            </div>
            <div className="contentt">
              Everyone realize  would be desirable
            </div>
          </div>
          <div className="activity">
            <div className="date">
              <span className="todaydate">10</span>
              <span className="month">Sep</span>
            </div>
            <div className="contentt">
              Joined the group " Boardmanship Fourm"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
