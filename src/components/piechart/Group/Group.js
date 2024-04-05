import React from "react";
import "./Group.css";

const Group = ({ dataMapping }) => {
  const total = Object.values(dataMapping).reduce(
    (sum, item) => sum + item.value,
    0
  );
  let startAngle = 0;

  return (
    <div className='ellipse-parent'>
      {Object.entries(dataMapping).map(([id, { value, color }]) => {
        const percentage = (value / total) * 100;
        const endAngle = startAngle + percentage * 3.6; // Simplified calculation
        const segmentStyle = {
          backgroundColor: color,
          transform: `rotate(${startAngle}0deg)`,
          width: `${percentage}%`,
        };
        startAngle = endAngle;

        return <div key={id} className='ellipse' style={segmentStyle}></div>;
      })}
    </div>
  );
};

export default Group;
