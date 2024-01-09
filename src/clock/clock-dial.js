import React from "react";

const ClockDial = ({ width = "300", height = "80", strokeWidth = "4" }) => {
  return (
    <svg height={height} width="300">
      <g fill="none" stroke="black" strokeWidth={strokeWidth}>
        {/* <path stroke-dasharray="5,5" d="M5 20 l215 0" /> */}
        <path stroke-dasharray="10,10" d="M5 40 l215 0" />
        {/* <path stroke-dasharray="20,10,5,5,5,10" d="M5 60 l215 0" /> */}
      </g>
    </svg>
  );
};

export default ClockDial;
