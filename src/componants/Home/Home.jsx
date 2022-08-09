import React from "react";
import Navbar from "../../subComponents/navbar/Navbar";
import Profile from "../../subComponents/profile/Profile";
import Sidebar from "../../subComponents/sidebar/Sidebar";
import Summery from "../../subComponents/summery/Summery";
import Wholechart from "../../subComponents/Wholechart/Wholechart";
import Widgets from "../../subComponents/widgets/Widgets";
import "./home.scss";

const Home = () => {
  return (
    <div className="Home">
      <Sidebar />
      <div className="HomeContainer">
        <Navbar />
        <div className="prof">
          <div className="chart">
            <div className="widgests">
              <Widgets type="revenue" />
              <Widgets type="orders" />
              <Widgets type="COSTOMER" />
              {/* <Widgets/> */}
            </div>
            <div className="Wholechart">
              <Wholechart />
            </div>
            {/* <div className="widgests">
              <Widgets type="revenue" />
              <Widgets type="orders" />
              <Widgets type="COSTOMER" />
            </div> */}
            <Summery/>
          </div>
          <div className="profile">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
