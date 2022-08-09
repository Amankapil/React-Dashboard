import "./Wholechart.scss";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Feb",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mar",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Apr",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "May",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "June",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "JUly",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Aug",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const getIntroOfPage = (label) => {
  if (label === "Page A") {
    return "Page A is about men's clothing";
  }
  if (label === "Page B") {
    return "Page B is about women's dress";
  }
  if (label === "Page C") {
    return "Page C is about women's bag";
  }
  if (label === "Page D") {
    return "Page D is about household goods";
  }
  if (label === "Page E") {
    return "Page E is about food";
  }
  if (label === "Page F") {
    return "Page F is about baby food";
  }
  return "";
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};

const Wholechart = () => {
  return (
    <>
      <div className="wholechart">
        <div className="head">
          <span className="overview">Overview</span>
          <span className="sort">
            Sort by : yearly
            <KeyboardArrowDownTwoToneIcon />
          </span>
        </div>
        <div className="calculater">
          <div className="month">
            <small>this month</small>
            <div className="priceontainer">
              <span className="price">$24,568</span>
              <span className="scounter">
                <AddRoundedIcon className="icon" />
                2.65%
              </span>
            </div>
            <div className="allcontain">
              <div className="leftside">
                <div className="monthorders bb1">
                  <span className="val">Orders</span>
                  <span className="num">5643</span>
                </div>
                <div className="monthorders bb1">
                  <span className="val">Orders Value</span>
                  <span className="num">12.03%</span>
                </div>
                <div className="monthorders">
                  <span className="val">Income</span>
                  <span className="num">$35,652</span>
                </div>
              </div>
              <div className="rightside">
                <div className="monthorders bb1">
                  <span className="val">Sales</span>
                  <span className="num">16,273</span>
                </div>
                <div className="monthorders bb1">
                  <span className="val">Costomer</span>
                  <span className="num">$12,242</span>
                </div>
                <div className="monthorders">
                  <span className="val">expense</span>
                  <span className="num">5643</span>
                </div>
              </div>
            </div>
          </div>
          <div className="graph">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="pv" barSize={20} fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wholechart;
