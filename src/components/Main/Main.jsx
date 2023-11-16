import React from "react";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="left-side">
        <LeftSide />
      </div>
      <div className="right-side">
        <RightSide />
      </div>
    </div>
  );
};

export default Main;
