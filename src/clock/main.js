import React from "react";

const AnalogClock = () => {
  return (
    <div className="clock-bg">
      <div classname="clock-dial">
        <div className="clock-hands hour">
          <div className="clock-hands minute">
            <div className="clock-hands sec"></div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalogClock;
