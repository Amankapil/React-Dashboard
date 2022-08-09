import "./widgests.scss";
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';


const Widgets = ({type}) => {
    let data  // temprary data taken //////////////////////////////////////////////////
    const amount = 100;
    const diff = 20
    switch (type) {
        case "revenue":
            data= {
                title : "REVENUE",
                ismoney: true,
                icon:(
                    <DonutSmallIcon className="icon lg "  />
                )
            }    
            break
        case "orders":
            data= {
                title : "ORDERS",
                ismoney: false,
                icon:(
                    <ShoppingBagTwoToneIcon className="icon lg " />
                )
            }    
            break
        case "COSTOMER":
            data= {
                title : "COSTOMER",
                ismoney: false,
                icon:(
                    <PeopleAltTwoToneIcon className="icon lg " />
                )
            }    
            break
        default:
            break;
    }
  return (
    <div className="widgets">
      <div className="left">
        <span className="logo">
          {data.icon} 
        </span>
        <div className="revenue">
          <span className="title"> {data.title}</span>
          <span className="counter">{data.ismoney  && "$"}  {amount}
          </span>
        </div>
      </div>
      <div className="right">
        <span className="scounter">
          <AddRoundedIcon className="icon" />
           2.65%
        </span>
      </div>
    </div>
  );
};

export default Widgets;
