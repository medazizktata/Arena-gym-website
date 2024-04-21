import React, { useState } from "react";
import ButtonYellow from "./Buttons/ButtonYellow";
import ButtonBlack from "./Buttons/ButtonBlack";
import DynamicSVGComponent from "./DynamicIcon";
import { getColor } from "../utils/getColor";

const SubscriptionBox = ({
  type,
  packName,
  price,
  duration,
  items,
  svgIcon,
  link,
  width = "",
  height = "",
}) => {

  const [isSelected, setIsSelected] = useState(false);

  const handleSelection = () => {
    setIsSelected(!isSelected);
  };

  const boxBaseStyle =
    "max-w-sm mx-auto w-full p-4 relative overflow-hidden transition duration-300 ease-in-out cursor-pointer";
  const boxStyle =
    type === 1
      ? `${boxBaseStyle} bg-yellowMain text-black`
      : `${boxBaseStyle} bg-blackBG text-white`;

  const iconColor = type === 1 ? "blackBG" : "white";
  const iconColorHover = "blackBG";

  const priceColor =
    type === 1 ? "text-black" : "text-yellowMain hover:text-black h-22";
  const boxClass =
    type === 1
      ? "border-2 border-transparent shadow-cardSmallYellowDark hover:shadow-cardYellowMain hover:border-black"
      : "border-2 border-white shadow-cardSmallWhite hover:shadow-cardYellowMain hover:border-black";
  const sizeStyle = type === 1 ? "h-full" : "";

  /* svgIcon */
  /* <div className="group group-hover:text-black">
      <DynamicSVGComponent
        svgPath={svgIcon}
        color={`${getColor(type === 1 ? "blackBG" : "white")}`}
        hoverColor={"black"}
      />
    </div> */
  const icon = (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.1846 1.54834C6.13116 1.54834 1.22363 6.45586 1.22363 12.5093C1.22363 18.5627 6.13116 23.4703 12.1846 23.4703C18.238 23.4703 23.1456 18.5627 23.1456 12.5093C23.1456 6.45586 18.238 1.54834 12.1846 1.54834ZM16.9357 10.6559C17.0232 10.5559 17.0898 10.4394 17.1316 10.3133C17.1734 10.1872 17.1895 10.054 17.1791 9.92151C17.1686 9.78905 17.1318 9.66002 17.0708 9.542C17.0097 9.42399 16.9257 9.31937 16.8236 9.23431C16.7216 9.14925 16.6035 9.08546 16.4764 9.0467C16.3493 9.00794 16.2158 8.99498 16.0836 9.0086C15.9514 9.02222 15.8233 9.06213 15.7068 9.12599C15.5903 9.18985 15.4877 9.27636 15.4051 9.38045L11.1204 14.5211L8.90328 12.303C8.71535 12.1215 8.46365 12.0211 8.20238 12.0234C7.94111 12.0256 7.69119 12.1304 7.50644 12.3152C7.32169 12.4999 7.21689 12.7499 7.21462 13.0111C7.21235 13.2724 7.31279 13.5241 7.4943 13.712L10.4837 16.7014C10.5816 16.7992 10.6988 16.8756 10.8278 16.9256C10.9569 16.9757 11.095 16.9983 11.2333 16.992C11.3715 16.9857 11.507 16.9507 11.631 16.8892C11.755 16.8276 11.8648 16.7409 11.9534 16.6346L16.9357 10.6559Z"
          fill={iconColor}
          className="group group-hover:fill-black transition duration 300 all"

        />
      </svg>
  ) || (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  return (
    <div
      className={`${boxStyle} ${sizeStyle} ${boxClass} px-6 max-w-screen-sm:scale-60 max-w-screen-md:scale-90 lg:scale-100 hover:bg-white hover:text-black group transition duration-300 ease-in-out cursor-pointer`}
    >
      {type === 1 && (
        <div className="text-lg font-bold font-Urbanist bg-white group-hover:bg-yellowMain transition duration-300 ease-in-out cursor-pointer p-1.5 w-40 text-center absolute top-5 -right-1 transform rotate-45 translate-x-1/4 -translate-y-1/10">
          Best Offer
        </div>
      )}
      <div
        className={`py-3 font-bold text-xl font-Gentona uppercase absolute top-0  ${
          type === 1 ? "text-black" : "text-white"
        }hover:text-black`}
      >
        {packName}
      </div>

      <div className="flex flex-col items-start justify-start mt-10">
        <div className="flex items-baseline">
          <h2
            className={`text-5xl font-Urbanist ${priceColor} group-hover:text-black transition duration-300 ease-in-out font-bold`}
          >
            {price}
          </h2>
          <span
            className={`text-3xl font-Urbanist ml-2.5 ${priceColor} group-hover:text-black transition duration-300 ease-in-out font-bold`}
          >
            TND
          </span>
        </div>
        <p className="mb-6">{duration}</p>
        <ul className="list-disc font-roboto font-bold">
          {items.map((item, index) => (
            <li key={index} className="flex mb-3">
              {icon}
              <span className="px-4">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubscriptionBox;
