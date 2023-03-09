import "../styles/css/controllers.css";
import MainButtons from "./MainButtons";
import {
  GoTriangleDown,
  GoTriangleLeft,
  GoTriangleRight,
  GoTriangleUp,
} from "react-icons/go";
import { MicButton } from "./MicButton";
import { BottomButton } from "./BottomButtons";
import { BsThreeDots } from "react-icons/bs";

export const Controller = () => {
  return (
    <div className="wrap-controllers">
      <h1>TEA HELPER GUI</h1>
      <MainButtons />
      <div className="controls">
        <div className="control-top flex">
          <div className="control-top-mid controller">
            <GoTriangleUp></GoTriangleUp>
          </div>
        </div>
        <div className="control-mid flex">
          <div className="control-left controller">
            <GoTriangleLeft></GoTriangleLeft>
          </div>
          <div className="control-mid-mid flex">
            <div className="stop-button">OK</div>
          </div>
          <div className="control-right controller">
            <GoTriangleRight></GoTriangleRight>
          </div>
        </div>
        <div className="control-bottom flex">
          <div className="control-bottom-mid controller">
            <GoTriangleDown></GoTriangleDown>
          </div>
        </div>
      </div>
      <div className="bottom-buttons-container flex">
        <BottomButton icon={<BsThreeDots />} color="success" number="1" label="Options" />
        <BottomButton icon={<BsThreeDots />} color="warning" number="2" label="Options" />
        <BottomButton icon={<BsThreeDots />} color="error" number="3" label="Options" />
        <MicButton />
      </div>
    </div>
  );
};
