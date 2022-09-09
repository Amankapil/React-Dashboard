import React from "react";
import Navbar from "../../subComponents/navbar/Navbar";
import Profile from "../../subComponents/profile/Profile";
import Sidebar from "../../subComponents/sidebar/Sidebar";
import Provide from "../PMI/PMI";


import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";

import "./home.scss";

const Home = () => {
const user = useSelector(selectUser);



  return (
    <>
    <div className="Home">
      <Sidebar />
      <div className="HomeContainer">
        <Navbar />
        {/* <Provide/>   */}
        {
          user  ? <Provide/> :
          (
            <h1>
              im not put the sidebar routing due to time problem 
              so you can  login and and directly fill the emloyye detail
            </h1>
          )
        }
      </div>
      <div className="createuser">
      </div>
    </div>


    </>
  );
};

export default Home;
