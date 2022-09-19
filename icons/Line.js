// React Imports
import { useState, useEffect } from "react";

const Line = ({ color, isSmall }) => {
  const [size, setSize] = useState("180");

  useEffect(() => {
    isSmall ? setSize("80") : setSize("160");
  }, [isSmall]);

  return (
    <>
      <svg
        width={size}
        height="3"
        viewBox={`0 0 ${size} 3`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="2"
          y1="2"
          x2="182"
          y2="2"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default Line;
