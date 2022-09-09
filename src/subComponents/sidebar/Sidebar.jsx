import React, { useState } from "react";
import "./sidebar.scss";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";


import DashboardIcon from "@mui/icons-material/Dashboard";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";

import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
const Sidebar = () => {
  const [isOpen, setIsope] = useState(false);
  const toggle = () => setIsope(!isOpen);
  return (
    <>
      <div className="sidebar">
        <div className="sidepanel" id="mySidepanel">
          <div className="top">
            <div className="drop">
              {/* <span className="drop">Chat</span> */}
              {/* <small className="title">MENU</small> */}
              {/* <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">x</a> */}
              {/* <span className="hot">Hot</span> */}
              <span className="opnenav"></span>
            </div>
            <div className="dashboard">
              {/* //logo */}
              <DashboardIcon />
              <div className="drop">
                <span> ORANGE HRM</span>
                <KeyboardArrowDownTwoToneIcon />
              </div>
            </div>
          </div>
          <div className="center ">
            <small className="title drop">APPLICATION</small>
            <ul>
              <div className="hoverr">
                <li>
                  <AdminPanelSettingsIcon />
                  <span className="drop">Admin</span>
                </li>
              </div>
              <div className="hoverr">
                <li>
                  <CardGiftcardIcon />
                  <span className="drop">PMI</span>
                </li>
              </div>
              <div className="hoverr">
                <li>
                  <BusinessCenterIcon />
                  <span className="drop">Leaves</span>
                </li>
              </div>
              <div className="hoverr">
                <li>
                  <Inventory2RoundedIcon />
                  <span className="drop">time</span>
                </li>
              </div>
              <div className="hoverr">
                <li>
                  <Inventory2RoundedIcon />
                  <span className="drop">My Info</span>
                </li>
              </div>
              <div className="hoverr">
                <li>
                  <Inventory2RoundedIcon />
                  <span className="drop">Dashboard</span>
                </li>
              </div>
              <div className="hoverr">
                <li>
                  <Inventory2RoundedIcon />
                  <span className="drop">Directoty</span>
                </li>
              </div>
              <div className="hoverr">
                <li>
                  <Inventory2RoundedIcon />
                  <span className="drop">Mintanance</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
