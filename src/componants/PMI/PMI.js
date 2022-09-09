import React, { useState, useEffect } from "react";
import Navbar from "../../subComponents/navbar/Navbar";
import "./pmi.scss";
import axios from "axios";

import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../features/user/userSlice";
const Provide = () => {
  const [contact, setcontact] = useState(false);
  const [personal, setpersonal] = useState(true);
  const [Cdettail, setcdetail] = useState({
    street1: "",
    street2: "",
    city: "",
    state: "",
    postal: "",
    country: "",
    home: "",
    mobile: "",
    work: "",
    mail1: "",
    mail2: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setcdetail({ ...Cdettail, [name]: value });
  };

  const user = useSelector(selectUser);
  useEffect(() => {}, [contact]);
  const handlecontact = () => {
    setcontact(!contact);
    // setpersonal(false);
  };

  const handlepersonal = () => {
    setcontact(false);
    // setpersonal(true);
  };
  const handlesubmit = async (e) => {
    const {
      street1,
      street2,
      city,
      state,
      postal,
      country,
      home,
      mobile,
      work,
      mail1,
      mail2,
    } = Cdettail;

    axios
      .post("https://jsonplaceholder.typicode.com/posts", Cdettail, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ",
        },
      })
      .then((res) => {
        "Content-Type:application/json";

        alert(res.data.mesaage);

        console.log(res);
      });
  };

  return (
    <>
      {/* <Navbar/> */}

      <div className="bottum-navbar">
        <div className="query">
          <ul>
            <li className="itemms">Configuration</li>
            <li className="itemms">Employye List</li>
            <li className="itemms">Add Employee</li>
            <li className="itemms">Reports</li>
          </ul>
        </div>
      </div>

      <div className="pmi-container">
        <div className="pmi-sidebar mx-4">
          <div className="name">
            <h1>{user.name}</h1>
            <div>
              <img className="immg mr-5" src="./k44.jpg" alt="" />
            </div>
          </div>

          <div className="details">
            <ul>
              <li>
                {" "}
                <button onClick={handlepersonal}> personal details</button>
              </li>
              <li>
                <button onClick={handlecontact}> contact Detail</button>
              </li>
              <li>Emergency Detail</li>
              <li>Dependents</li>
              <li>immigration</li>
              <li>Job</li>
              <li>Salary</li>
            </ul>
          </div>
        </div>

        <div className="pmi-form">
          {!contact ? (
            <div className="employ">
              <div className="employye">
                <header>personal detail</header>
                <div className="row my-5">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      aria-label="First name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="middlename name"
                      aria-label="Last name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                    />
                  </div>
                </div>
              </div>
              <div className="id">
                <div className="row my-5">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Emloyee ID"
                      aria-label="First name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Other ID"
                      aria-label="Last name"
                    />
                  </div>
                </div>
              </div>
              <div className="LIcense">
                <div className="row my-5">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Driving Licence number"
                      aria-label="First name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="data"
                      className="form-control"
                      placeholder=""
                      aria-label="Last name"
                    />
                  </div>
                </div>
              </div>
              <div className="nationality">
                <select
                  class="form-select mx-3 mt-3"
                  aria-label="Default select example"
                >
                  <option selected>Nationality</option>
                  <option value="1">indian</option>
                  <option value="2">other</option>
                </select>
                <select
                  class="form-select mt-3"
                  aria-label="Default select example"
                >
                  <option selected>marital status </option>
                  <option value="1">single</option>
                  <option value="2">marrige</option>
                  <option value="3">student</option>
                </select>
              </div>
              <div className="nationality mt-5">
                <div className="mx-5">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
                <div>
                  <div className="form-check df">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      male
                    </label>
                  </div>
                  <div className="form-check df">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      female
                    </label>
                  </div>
                  <h1>
                    only the contact detail form will work and post data to json placeholder
                  </h1>
                </div>
              </div>
            </div>
          ) : null}
          {contact ? (
            <div className="cont">
              <header>Contact Details</header>
              <span>ADRRESS</span>
              <div className="employye">
                <div className="row my-5">
                  <div className="col">
                    <input
                      type="text"
                      name="street1"
                      value={Cdettail.street1}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="STREET 1"
                      aria-label="First name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      name="street2"
                      value={Cdettail.street2}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="middlename name"
                      aria-label="Street-2"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      name="city"
                      value={Cdettail.city}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="City"
                      aria-label="Last name"
                    />
                  </div>
                </div>
                <div className="row  my-5">
                  <div className="col">
                    <input
                      type="text"
                      name="state"
                      value={Cdettail.state}
                      onChange={handleChange}
                      className="form-control"
                      placeholder=" street Provience"
                      aria-label="First name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      name="postal"
                      value={Cdettail.postal}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Zip/postal code"
                      aria-label="Street-2"
                    />
                  </div>
                  <div className="col">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      // name="country"
                      // value={Cdettail.country}
                      onChange={handleChange}
                    >
                      <option selected>country</option>
                      <option value="1">indian</option>
                      <option value="2">other</option>
                    </select>
                  </div>
                </div>

                <header>Telephone</header>
                <div className="row  my-5">
                  <div className="col">
                    <input
                      type="text"
                      name="home"
                      value={Cdettail.home}
                      onChange={handleChange}
                      className="form-control"
                      placeholder=" HOME"
                      aria-label="First name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      name="mobile"
                      value={Cdettail.mobile}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="MOBILE"
                      aria-label="Street-2"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      name="work"
                      value={Cdettail.work}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="WORK"
                      aria-label="Last name"
                    />
                  </div>
                </div>
                <header>EMAIL</header>
                <div className="row  my-5">
                  <div className="col">
                    <input
                      type="text"
                      name="mail1"
                      value={Cdettail.mail1}
                      onChange={handleChange}
                      className="form-control"
                      placeholder=" WORK EMAIL"
                      aria-label="First name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      name="mail2"
                      value={Cdettail.mail2}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="OTHER EMAIL"
                      aria-label="Street-2"
                    />
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={handlesubmit}
                class="btn btn-success"
              >
                save
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Provide;
