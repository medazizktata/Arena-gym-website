import { useEffect, useRef, useState } from "react";
import { getColor } from "../utils/getColor";

const BackgroundText = ({ text, fontFamily, strokeColor, textSize }) => {
  const [svgWidth, setSvgWidth] = useState(0);
  const [svgHeight, setSvgHeight] = useState(0);
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      const bbox = svgRef.current.getBBox();
      setSvgWidth(bbox.width);
      setSvgHeight(bbox.height);
    }
  }, [text, fontFamily, strokeColor, textSize]);

  const translatedColor = getColor(strokeColor);

  return (
    <div className="w-full text-center">
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="w-full"
        ref={svgRef}
      >
        <text
          x={svgWidth / 2}
          y={svgHeight / 2}
          dominantBaseline="middle"
          textAnchor="middle"
          fill="none"
          stroke={translatedColor}
          strokeWidth="0.2"
          opacity="50%"
          fontSize={textSize}
          className={`font-${fontFamily} uppercase font-black`}
        >
          {text}
        </text>
      </svg>
    </div>
  );
};

export default BackgroundText;
