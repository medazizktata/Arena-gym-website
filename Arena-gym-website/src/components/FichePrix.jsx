import React from "react";
import ButtonYellow from "./Buttons/ButtonYellow";
import ButtonBlack from "./Buttons/ButtonBlack"; // Import ButtonBlack component

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
  const boxBaseStyle = "max-w-sm w-full p-4 relative overflow-hidden";
  const boxStyle =
    type === 1
      ? `bg-yellowMain ${boxBaseStyle}`
      : `bg-blackBG text-white ${boxBaseStyle}`;
  const priceColor = type === 1 ? "text-black" : "text-yellowMain h-22";
  const boxClass = type === 1 ? "shadow-yellow" : "shadow-white";
  const sizeStyle = type === 1 ? "h-full" : "h-5/6"; // Adjust height here if necessary

  const icon = svgIcon || (
    // Default SVG icon
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
    <div className={`${boxStyle} ${sizeStyle} ${boxClass} ${width} ${height}`}>
      {type === 1 && (
        <div className="text-xs font-bold text-black font-Urbanist bg-white p-1.5 w-32 text-center absolute top-5 -right-1 transform rotate-45 translate-x-1/4 -translate-y-1/10">
          Best Offer
        </div>
      )}

      <div className="py-3 font-bold text-xl font-Gentona uppercase absolute top-0 left-4">
        {packName}
      </div>
      <div
        className={`py-3 font-bold text-xl font-Gentona uppercase absolute top-0 left-4 ${
          type === 1 ? "text-black" : "text-white"
        }`}
      >
        {packName}
      </div>

      <div className="flex flex-col items-start justify-start mt-10">
        <div className="flex items-baseline">
          <h2 className={`text-5xl font-Urbanist ${priceColor} font-bold`}>
            {price}
          </h2>
          <span
            className={`text-3xl font-Urbanist ml-2.5 ${priceColor} font-bold`}
            style={{ position: "relative", bottom: "0.35em" }}
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
        {/* Conditional rendering of button */}
        <div className="mt-3 mx-auto">
        {type === 1 ? (
          <ButtonBlack
            buttonFont="font-robotoCon"
            fontWeight="font-bold"
            paddingX={7}
            onClick={() => (window.location.href = link)}
          >
            INSCRIRE MAINTENANT
          </ButtonBlack>
        ) : (
          <ButtonYellow
            buttonFont="font-robotoCon"
            fontWeight="font-bold"
            paddingX={7}
            onClick={() => (window.location.href = link)}
          >
            INSCRIRE MAINTENANT
          </ButtonYellow>
        )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBox;
