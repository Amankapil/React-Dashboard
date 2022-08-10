import React from "react";
import "./navbar.scss";
import im from "./k44.jpg";
import SearchIcon from "@mui/icons-material/Search";
import AssistantPhotoRoundedIcon from "@mui/icons-material/AssistantPhotoRounded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationAddRoundedIcon from "@mui/icons-material/NotificationAddRounded";
import DensityMediumSharpIcon from "@mui/icons-material/DensityMediumSharp";

import SettingsIcon from "@mui/icons-material/Settings";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="icoon">
          <DensityMediumSharpIcon className="icon" />
        </div>
        <div className="h5">
          <h5>Dashboard</h5>
        </div>
        <div className="item">
          <div className="items">
            <SearchIcon />
          </div>
          <div className="items">
            <AssistantPhotoRoundedIcon />
          </div>
          <div className="items">
            <DashboardIcon />
          </div>
          <div className="items">
            <NotificationAddRoundedIcon />
          </div>
          <div className="items">
            <SettingsIcon />
          </div>
          <div className="items">
            <img src={im} alt="" className="avtar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
