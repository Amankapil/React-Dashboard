import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { loginn, logout } from "../../features/user/userSlice";
// import {loginuser} from "../../actions/user"

import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";

// import {
//   selectUserName,
//   selectUserEmail,
//   setUserLoginDetails,
//   selectUserPhoto,
// } from "../../reducer/userreducer";

const Login = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const [password, setPassword] = useState(false);

  const [login, setlogin] = useState({
    name: "",
    email: "",
    password: "",
  });

  const pass = () => {
    if (user.password === "admin") {
      setPassword(true);
    }
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setlogin({ ...login, [name]: value });
  };
  const handlesubmit = async (e) => {
    // e.preventDefault();

    const { name, email, password } = login;
    if (name && email && password) {
      // const json = JSON.stringify(login);

      // localStorage.setItem("logindetail", json);
      dispatch(
        loginn({
          name: name,
          email: email,
          password: password,
          // store,
        })
      );
      alert("user logged in sucessfully ");


       navigate("/");
    } else {
      alert("please fill the detail");
    }
  };

  return (
    <div className=" container mt-5">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            name
          </label>
          <input
            type="text"
            name="name"
            value={login.name}
            onChange={handleChange}
            className="form-control"
            // id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={login.email}
            onChange={handleChange}
            className="form-control"
            // id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={login.password}
            onChange={handleChange}
            className="form-control"
            // id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check"></div>
      </form>
      <button
        type="submit"
        onClick={handlesubmit}
        className="btn btn-outline-warning"
      >
        login
      </button>
    </div>
  );
};

export default Login;
