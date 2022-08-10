import React ,{useState} from "react";
import "./sidebar.scss";
import "./toggle.jsx"
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";

import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import FeaturedVideoRoundedIcon from "@mui/icons-material/FeaturedVideoRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import SpeakerGroupRoundedIcon from "@mui/icons-material/SpeakerGroupRounded";
import DensityMediumSharpIcon from "@mui/icons-material/DensityMediumSharp";
const Sidebar = () => {
  const [isOpen, setIsope] = useState(false);
  const toggle = ()=>setIsope (!isOpen);
  return (
    <>
      <div className="sidebar">
        <div  className="sidepanel"id="mySidepanel">
          <div className="top">
            <div className="drop">
              {/* <span className="drop">Chat</span> */}
              <small className="title">MENU</small>
              {/* <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">x</a> */}
              {/* <span className="hot">Hot</span> */}
              <span className="opnenav">
                <DensityMediumSharpIcon onClick= {toggle} className="icon" />
              </span>
            </div>
            <div className="dashboard">
              <DashboardIcon />
              <div className="drop">
                <span> Dashboard</span>
                <KeyboardArrowDownTwoToneIcon />
              </div>
            </div>
          </div>
          <div className="center ">
            <small className="title drop">APPLICATION</small>
            <ul>
              <li>
                <CalendarMonthIcon />
                <span className="drop">Calender</span>
              </li>
              <li>
                <ChatRoundedIcon />
                <div className="drop">
                  <span className="drop">Chat</span>
                  <span className="hot">Hot</span>
                </div>
              </li>
              <li>
                <Inventory2RoundedIcon />
                <span className="drop">FIle Manager</span>
              </li>
              <li>
                <FeaturedVideoRoundedIcon />
                <div className="drop">
                  <span>Ecommerce</span>
                  <KeyboardArrowDownTwoToneIcon />
                </div>
              </li>
              <li>
                <MailRoundedIcon />
                <div className="drop">
                  <span>Email</span>

                  <KeyboardArrowDownTwoToneIcon />
                </div>
              </li>
              <li>
                <InsertDriveFileRoundedIcon />
                <div className="drop">
                  <span>Invoices</span>

                  <KeyboardArrowDownTwoToneIcon />
                </div>
              </li>
              <li>
                <WorkRoundedIcon />

                <div className="drop">
                  <span>Projects</span>
                  <KeyboardArrowDownTwoToneIcon />
                </div>
              </li>
              <li>
                <WifiRoundedIcon />
                <div className="drop">
                  <span>Contact</span>

                  <KeyboardArrowDownTwoToneIcon />
                </div>
              </li>
            </ul>
          </div>
          <div className="bottum ">
            <small className="title">LAYOUTS</small>
          </div>
          <div className="bottum ">
            <small className="title">PAGES</small>
            <li>
              <GroupAddRoundedIcon />
              <span>Authentication</span>
            </li>
            <li>
              <SpeakerGroupRoundedIcon />
              <span>Utility</span>
            </li>
          </div>
          <div className="bottum ">
            <small className="title">COMPONENTS</small>
            <li>
              <Inventory2RoundedIcon />
              <span>UI Element</span>
            </li>
            <li>
              <Inventory2RoundedIcon />
              <span>Forms</span>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
