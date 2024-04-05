import React from "react";
import "./PieChart.css";

const PieChart = ({ data }) => {
  const total = data.reduce((acc, { value }) => acc + value, 0);

  const renderSlice = () => {
    let cumulativePercent = 0;
    return data.map(({ value, color }, index) => {
      const slicePercentage = (value / total) * 100;
      const startAngle = (cumulativePercent / 100) * Math.PI * 2;
      const endAngle =
        ((cumulativePercent + slicePercentage) / 100) * Math.PI * 2;
      const largeArcFlag = slicePercentage > 50 ? 1 : 0;

      const x1 = Math.cos(startAngle) * 50 + 50;
      const y1 = Math.sin(startAngle) * 50 + 50;
      const x2 = Math.cos(endAngle) * 50 + 50;
      const y2 = Math.sin(endAngle) * 50 + 50;

      const pathData = [
        `M50,50 L${x1},${y1}`,
        `A50,50 0 ${largeArcFlag},1 ${x2},${y2}`,
        "Z",
      ].join(" ");

      cumulativePercent += slicePercentage;
      return (
        <path
          key={index}
          className='pie-slice'
          d={pathData}
          fill={color}
          filter='url(#shadow)'
        />
      );
    });
  };

  return (
    <svg
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <defs>
        <filter id='shadow' x='-20%' y='-20%' width='120%' height='140%'>
          <feGaussianBlur in='SourceAlpha' stdDeviation='2' />
          <feOffset dx='-1' dy='2' result='offsetblur' />
          <feComponentTransfer>
            <feFuncA type='linear' slope='0.4' />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>
      {renderSlice()}
    </svg>
  );
};

export default PieChart;
