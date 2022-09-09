import "./App.css";
import Home from "./componants/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./subComponents/login/Login";
import Provide from "./componants/PMI/PMI";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState(false);

  const user = useSelector(selectUser);
  const pass = () => {
    if (user.password === "admin") {
      setPassword(true);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {pass ? (
            <Route path="/pmi" element={<Provide />}></Route>
          ) : (
            <Route path="/" element={<Home />}></Route>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
