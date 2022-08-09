import "./Summery.scss";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: " Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const dta = [
  { name: "Group A", value: 800 },
  { name: "Group B", value: 50 },
  { name: "Group C", value: 300 },
  // { name: 'Group D', value: 200 },
];
const COLORS = ["#0a58ca", "#FF8042", "#cbddf9", "#FFBB28"];
const Summery = () => {
  return (
    <>
      <div className="summery">
        <div className="users l1">
          <div className="head">
            <span className="user1">User Activity</span>
            <span className="week">weekly</span>
          </div>
          <div className="month2">
            <div className="montset">
              <span className="monthset1">This month</span>
              <span className="numset">16,543</span>
            </div>

            <div className="color">
              <span className="blue"> </span>
              <span className="current">Current</span>
              {/* <br></br> */}
              <span className="green"></span>
              <span className="privious">Previous</span>
            </div>
          </div>
          <div className="graph-2">
            <div style={{ width: "100%", height: 150 }}>
              <ResponsiveContainer>
                <AreaChart
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="users status l1">
          <div className="head">
            <span className="user1">status</span>
            <span className="week">
              <MoreHorizIcon />
            </span>
          </div>
          <div className="progbar">
            <PieChart width={300} height={200}>
              <Pie
                data={dta}
                cx={140}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={4}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
        <div className="users toporders l1">
          <div className="head">
            <span className="user1">Top products</span>
            <span className="week">
              Monthly <KeyboardArrowDownTwoToneIcon />
            </span>
          </div>
          <div className="productlist">
            <div className="products">
              {/* <div className="number"> */}
                <span className="s">#1</span>
              {/* </div> */}
              <div className="brandsales">
                <div className="brand">
                  <span className="brandname">Polo blue T-shirt</span>
                  <span className="price">$25.4</span>
                </div>
                <div className="sales">
                  <span className="salesnum">3.82k</span>
                </div>
              </div>
            </div>
            <div className="products">
              {/* <div className="number"> */}
                <span className="s">#3</span>
              {/* </div> */}
              <div className="brandsales">
                <div className="brand">
                  <span className="brandname">Hoodi for men</span>
                  <span className="price">$24.5</span>
                </div>
                <div className="sales">
                  <span className="salesnum">3.13k</span>
                </div>
              </div>
            </div>
            <div className="products">
              {/* <div className="number"> */}
                <span className="s">#3</span>
              {/* </div> */}
              <div className="brandsales">
                <div className="brand">
                  <span className="brandname">REd color cap</span>
                  <span className="price">$22.5</span>
                </div>
                <div className="sales">
                  <span className="salesnum">2.85k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summery;
