import { getColor } from "../utils/getColor"; // assuming you have a utility function to translate color names to hex codes

const BackgroundText = ({ text, fontFamily, strokeColor, textSize }) => {
  const translatedColor = getColor(strokeColor);
  return (
    <div className="w-full text-center">
      <svg viewBox="0 0 100 100" className="w-full">
        <text
          x="50%"
          y="15%"
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
