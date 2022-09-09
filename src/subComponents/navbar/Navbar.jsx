import React from "react";
import "./navbar.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router";
import { selectUser, logout } from "../../features/user/userSlice";
const Navbar = () => {
  const user = useSelector(selectUser);

  const log = localStorage.getItem("logindetail");
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logout());
  };

  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="h5">
          <h5>PMI</h5>
        </div>
        {/* <div className="item"> */}
        <div className="items">
          {user ? (
            <div className="container df-content">
              <h2>{user.name}</h2>
              {/* <button
                type="submit"
                onClick={handlelogout}
                className="btn btn-outline-warning"
              >
                logout
              </button> */}
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                type="button"
                class="btn btn-primary"
              >
                login
              </button>
            </>
          )}
        </div>
        {/* </div> */}
      </div>
      <h1>
      </h1>
    </div>
  );
};

export default Navbar;
