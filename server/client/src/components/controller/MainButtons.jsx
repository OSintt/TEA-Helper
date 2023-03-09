import { BiPowerOff } from "react-icons/bi";
import { AiOutlineCamera } from "react-icons/ai";
import { AiOutlineDatabase } from "react-icons/ai";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

export const MainButtons = () => {
  return (
    <div className="main-buttons-container controls">
      <div className="main-buttons-left flex">
        <div className="power-button">
          <IconButton aria-label="Power" color="error">
            <BiPowerOff />
          </IconButton>
        </div>
      </div>
      <div className="main-buttons-right flex">
        <div className="main-buttons flex">
          <Button color="secondary" startIcon={<AiOutlineDatabase />}>
            Watch data
          </Button>
        </div>
        <div className="main-buttons flex">
          <Link to="/webcam">
            <Button color="secondary" startIcon={<AiOutlineCamera />}>
              Init Webcam
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainButtons;
