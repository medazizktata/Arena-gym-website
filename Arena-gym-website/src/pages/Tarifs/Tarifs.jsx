import React, { useState } from "react";

import PageIntroduction from "../../components/PageIntroduction";
import AppSection from "../Home/AppSection";
import SubscriptionBox from "../../components/FichePrix";
import DynamicSVGComponent from "../../components/DynamicIcon";
import { getColor } from "../../utils/getColor";
import ButtonYellow from "../../components/Buttons/ButtonYellow";
import { Link } from "react-router-dom";
import FilterButton from "../../components/Buttons/FilterButton";
import SmallCard from "../../components/SmallCard";

function Tarifs() {
  const [isAnnual, setIsAnnual] = useState(false);

  const [selectedBoxIndex, setSelectedBoxIndex] = useState(null);
  const [selectedBoxData, setSelectedBoxData] = useState(null);

  const handleSelection = (index) => {
    if (index === selectedBoxIndex) {
      // If the clicked box is already selected, deselect it
      setSelectedBoxIndex(null);
      setSelectedBoxData(null);
    } else {
      // Otherwise, select the clicked box and capture its data
      setSelectedBoxIndex(index);
      setSelectedBoxData(currentPacksData[index]);
    }
  };

  const monthlyPacksData = [
    {
      type: "type2",
      packName: "PACK 1",
      price: "200",
      duration: "par mois",
      items: ["Cross kids", "Born to move", "Box", "Judo"],
      /* (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.1846 1.54834C6.13116 1.54834 1.22363 6.45586 1.22363 12.5093C1.22363 18.5627 6.13116 23.4703 12.1846 23.4703C18.238 23.4703 23.1456 18.5627 23.1456 12.5093C23.1456 6.45586 18.238 1.54834 12.1846 1.54834ZM16.9357 10.6559C17.0232 10.5559 17.0898 10.4394 17.1316 10.3133C17.1734 10.1872 17.1895 10.054 17.1791 9.92151C17.1686 9.78905 17.1318 9.66002 17.0708 9.542C17.0097 9.42399 16.9257 9.31937 16.8236 9.23431C16.7216 9.14925 16.6035 9.08546 16.4764 9.0467C16.3493 9.00794 16.2158 8.99498 16.0836 9.0086C15.9514 9.02222 15.8233 9.06213 15.7068 9.12599C15.5903 9.18985 15.4877 9.27636 15.4051 9.38045L11.1204 14.5211L8.90328 12.303C8.71535 12.1215 8.46365 12.0211 8.20238 12.0234C7.94111 12.0256 7.69119 12.1304 7.50644 12.3152C7.32169 12.4999 7.21689 12.7499 7.21462 13.0111C7.21235 13.2724 7.31279 13.5241 7.4943 13.712L10.4837 16.7014C10.5816 16.7992 10.6988 16.8756 10.8278 16.9256C10.9569 16.9757 11.095 16.9983 11.2333 16.992C11.3715 16.9857 11.507 16.9507 11.631 16.8892C11.755 16.8276 11.8648 16.7409 11.9534 16.6346L16.9357 10.6559Z"
            fill="#FFFFFF"
          />
        </svg>
      ), */
      svgIcon: "../../src/assets/Icons/CircularCheckboxSVG.svg",
      link: "#",
    },
    {
      type: 1,
      packName: "PACK 2",
      price: "560",
      duration: "par 6 mois",
      items: [
        "Force",
        "Cardio vasculaire",
        "Dance",
        "TRX",
        "Yoga",
        "Cross-fit",
        "Box",
      ],
      /* (
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.6766 2.01709C7.21285 2.01709 1.97266 7.25728 1.97266 13.7211C1.97266 20.1849 7.21285 25.4251 13.6766 25.4251C20.1404 25.4251 25.3806 20.1849 25.3806 13.7211C25.3806 7.25728 20.1404 2.01709 13.6766 2.01709ZM18.7498 11.742C18.8432 11.6353 18.9143 11.5109 18.959 11.3762C19.0036 11.2415 19.0208 11.0993 19.0097 10.9579C18.9985 10.8164 18.9592 10.6786 18.894 10.5526C18.8289 10.4266 18.7391 10.3149 18.6301 10.2241C18.5211 10.1332 18.3951 10.0651 18.2594 10.0237C18.1237 9.98236 17.9811 9.96852 17.8399 9.98306C17.6988 9.9976 17.562 10.0402 17.4376 10.1084C17.3132 10.1766 17.2037 10.269 17.1155 10.3801L12.5403 15.8693L10.1729 13.5008C9.97222 13.307 9.70345 13.1998 9.42448 13.2022C9.1455 13.2046 8.87863 13.3165 8.68136 13.5138C8.48409 13.7111 8.37219 13.9779 8.36976 14.2569C8.36734 14.5359 8.47458 14.8046 8.6684 15.0053L11.8604 18.1973C11.9649 18.3018 12.0901 18.3834 12.2279 18.4368C12.3657 18.4902 12.5132 18.5143 12.6608 18.5076C12.8085 18.5009 12.9531 18.4635 13.0855 18.3978C13.2179 18.3321 13.3352 18.2396 13.4298 18.126L18.7498 11.742Z"
            fill="black"
          />
        </svg>
      ), */
      svgIcon: "../../src/assets/Icons/CircularCheckboxSVG.svg",

      link: "#",
    },
    {
      type: "type2",
      packName: "Pro Package",
      price: "1560",
      duration: "12 mois + 3 mois gratuit",
      items: ["Force", "Cardio Vasculaire", "Dance", "TRX", "Éléments"],
      /* (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.1846 1.54834C6.13116 1.54834 1.22363 6.45586 1.22363 12.5093C1.22363 18.5627 6.13116 23.4703 12.1846 23.4703C18.238 23.4703 23.1456 18.5627 23.1456 12.5093C23.1456 6.45586 18.238 1.54834 12.1846 1.54834ZM16.9357 10.6559C17.0232 10.5559 17.0898 10.4394 17.1316 10.3133C17.1734 10.1872 17.1895 10.054 17.1791 9.92151C17.1686 9.78905 17.1318 9.66002 17.0708 9.542C17.0097 9.42399 16.9257 9.31937 16.8236 9.23431C16.7216 9.14925 16.6035 9.08546 16.4764 9.0467C16.3493 9.00794 16.2158 8.99498 16.0836 9.0086C15.9514 9.02222 15.8233 9.06213 15.7068 9.12599C15.5903 9.18985 15.4877 9.27636 15.4051 9.38045L11.1204 14.5211L8.90328 12.303C8.71535 12.1215 8.46365 12.0211 8.20238 12.0234C7.94111 12.0256 7.69119 12.1304 7.50644 12.3152C7.32169 12.4999 7.21689 12.7499 7.21462 13.0111C7.21235 13.2724 7.31279 13.5241 7.4943 13.712L10.4837 16.7014C10.5816 16.7992 10.6988 16.8756 10.8278 16.9256C10.9569 16.9757 11.095 16.9983 11.2333 16.992C11.3715 16.9857 11.507 16.9507 11.631 16.8892C11.755 16.8276 11.8648 16.7409 11.9534 16.6346L16.9357 10.6559Z"
            fill="#FFFFFF"
          />
        </svg>
      ), */
      svgIcon: "../../src/assets/Icons/CircularCheckboxSVG.svg",
      link: "#",
    },
    {
      type: "type2",
      packName: "Athlete Package",
      price: "300",
      duration: "par 3 mois",
      items: ["Force", "Cardio Vasculaire", "Dance", "TRX", "Éléments"],
      /* (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.1846 1.54834C6.13116 1.54834 1.22363 6.45586 1.22363 12.5093C1.22363 18.5627 6.13116 23.4703 12.1846 23.4703C18.238 23.4703 23.1456 18.5627 23.1456 12.5093C23.1456 6.45586 18.238 1.54834 12.1846 1.54834ZM16.9357 10.6559C17.0232 10.5559 17.0898 10.4394 17.1316 10.3133C17.1734 10.1872 17.1895 10.054 17.1791 9.92151C17.1686 9.78905 17.1318 9.66002 17.0708 9.542C17.0097 9.42399 16.9257 9.31937 16.8236 9.23431C16.7216 9.14925 16.6035 9.08546 16.4764 9.0467C16.3493 9.00794 16.2158 8.99498 16.0836 9.0086C15.9514 9.02222 15.8233 9.06213 15.7068 9.12599C15.5903 9.18985 15.4877 9.27636 15.4051 9.38045L11.1204 14.5211L8.90328 12.303C8.71535 12.1215 8.46365 12.0211 8.20238 12.0234C7.94111 12.0256 7.69119 12.1304 7.50644 12.3152C7.32169 12.4999 7.21689 12.7499 7.21462 13.0111C7.21235 13.2724 7.31279 13.5241 7.4943 13.712L10.4837 16.7014C10.5816 16.7992 10.6988 16.8756 10.8278 16.9256C10.9569 16.9757 11.095 16.9983 11.2333 16.992C11.3715 16.9857 11.507 16.9507 11.631 16.8892C11.755 16.8276 11.8648 16.7409 11.9534 16.6346L16.9357 10.6559Z"
            fill="#FFFFFF"
          />
        </svg>
      ), */
      svgIcon: "../../src/assets/Icons/CircularCheckboxSVG.svg",
      link: "#",
    },
  ];
  const annualPacksData = [
    {
      type: "type2",
      packName: "PACK 1",
      price: "100",
      duration: "par mois",
      items: ["Cross kids", "Born to move", "Box", "Judo"],
      /* (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.1846 1.54834C6.13116 1.54834 1.22363 6.45586 1.22363 12.5093C1.22363 18.5627 6.13116 23.4703 12.1846 23.4703C18.238 23.4703 23.1456 18.5627 23.1456 12.5093C23.1456 6.45586 18.238 1.54834 12.1846 1.54834ZM16.9357 10.6559C17.0232 10.5559 17.0898 10.4394 17.1316 10.3133C17.1734 10.1872 17.1895 10.054 17.1791 9.92151C17.1686 9.78905 17.1318 9.66002 17.0708 9.542C17.0097 9.42399 16.9257 9.31937 16.8236 9.23431C16.7216 9.14925 16.6035 9.08546 16.4764 9.0467C16.3493 9.00794 16.2158 8.99498 16.0836 9.0086C15.9514 9.02222 15.8233 9.06213 15.7068 9.12599C15.5903 9.18985 15.4877 9.27636 15.4051 9.38045L11.1204 14.5211L8.90328 12.303C8.71535 12.1215 8.46365 12.0211 8.20238 12.0234C7.94111 12.0256 7.69119 12.1304 7.50644 12.3152C7.32169 12.4999 7.21689 12.7499 7.21462 13.0111C7.21235 13.2724 7.31279 13.5241 7.4943 13.712L10.4837 16.7014C10.5816 16.7992 10.6988 16.8756 10.8278 16.9256C10.9569 16.9757 11.095 16.9983 11.2333 16.992C11.3715 16.9857 11.507 16.9507 11.631 16.8892C11.755 16.8276 11.8648 16.7409 11.9534 16.6346L16.9357 10.6559Z"
            fill="#FFFFFF"
          />
        </svg> */
      svgIcon: "../../src/assets/Icons/CircularCheckboxSVG.svg",
      link: "#",
    },
    {
      type: 1,
      packName: "PACK 2",
      price: "280",
      duration: "par 6 mois",
      items: [
        "Force",
        "Cardio vasculaire",
        "Dance",
        "TRX",
        "Yoga",
        "Cross-fit",
        "Box",
      ],
      /* (
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.6766 2.01709C7.21285 2.01709 1.97266 7.25728 1.97266 13.7211C1.97266 20.1849 7.21285 25.4251 13.6766 25.4251C20.1404 25.4251 25.3806 20.1849 25.3806 13.7211C25.3806 7.25728 20.1404 2.01709 13.6766 2.01709ZM18.7498 11.742C18.8432 11.6353 18.9143 11.5109 18.959 11.3762C19.0036 11.2415 19.0208 11.0993 19.0097 10.9579C18.9985 10.8164 18.9592 10.6786 18.894 10.5526C18.8289 10.4266 18.7391 10.3149 18.6301 10.2241C18.5211 10.1332 18.3951 10.0651 18.2594 10.0237C18.1237 9.98236 17.9811 9.96852 17.8399 9.98306C17.6988 9.9976 17.562 10.0402 17.4376 10.1084C17.3132 10.1766 17.2037 10.269 17.1155 10.3801L12.5403 15.8693L10.1729 13.5008C9.97222 13.307 9.70345 13.1998 9.42448 13.2022C9.1455 13.2046 8.87863 13.3165 8.68136 13.5138C8.48409 13.7111 8.37219 13.9779 8.36976 14.2569C8.36734 14.5359 8.47458 14.8046 8.6684 15.0053L11.8604 18.1973C11.9649 18.3018 12.0901 18.3834 12.2279 18.4368C12.3657 18.4902 12.5132 18.5143 12.6608 18.5076C12.8085 18.5009 12.9531 18.4635 13.0855 18.3978C13.2179 18.3321 13.3352 18.2396 13.4298 18.126L18.7498 11.742Z"
            fill="black"
          />
        </svg>
      ) */
      svgIcon: "../../src/assets/Icons/CircularCheckboxSVG.svg",

      link: "#",
    },
    {
      type: "type2",
      packName: "Pro Package",
      price: "780",
      duration: "12 mois + 3 mois gratuit",
      items: ["Force", "Cardio Vasculaire", "Dance", "TRX", "Éléments"],
      /* (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.1846 1.54834C6.13116 1.54834 1.22363 6.45586 1.22363 12.5093C1.22363 18.5627 6.13116 23.4703 12.1846 23.4703C18.238 23.4703 23.1456 18.5627 23.1456 12.5093C23.1456 6.45586 18.238 1.54834 12.1846 1.54834ZM16.9357 10.6559C17.0232 10.5559 17.0898 10.4394 17.1316 10.3133C17.1734 10.1872 17.1895 10.054 17.1791 9.92151C17.1686 9.78905 17.1318 9.66002 17.0708 9.542C17.0097 9.42399 16.9257 9.31937 16.8236 9.23431C16.7216 9.14925 16.6035 9.08546 16.4764 9.0467C16.3493 9.00794 16.2158 8.99498 16.0836 9.0086C15.9514 9.02222 15.8233 9.06213 15.7068 9.12599C15.5903 9.18985 15.4877 9.27636 15.4051 9.38045L11.1204 14.5211L8.90328 12.303C8.71535 12.1215 8.46365 12.0211 8.20238 12.0234C7.94111 12.0256 7.69119 12.1304 7.50644 12.3152C7.32169 12.4999 7.21689 12.7499 7.21462 13.0111C7.21235 13.2724 7.31279 13.5241 7.4943 13.712L10.4837 16.7014C10.5816 16.7992 10.6988 16.8756 10.8278 16.9256C10.9569 16.9757 11.095 16.9983 11.2333 16.992C11.3715 16.9857 11.507 16.9507 11.631 16.8892C11.755 16.8276 11.8648 16.7409 11.9534 16.6346L16.9357 10.6559Z"
            fill="#FFFFFF"
          />
        </svg>
      ) */
      svgIcon: "../../src/assets/Icons/CircularCheckboxSVG.svg",
      link: "#",
    },
    {
      type: "type2",
      packName: "Athlete Package",
      price: "150",
      duration: "par 3 mois",
      items: ["Force", "Cardio Vasculaire", "Dance", "TRX", "Éléments"],
      /* (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.1846 1.54834C6.13116 1.54834 1.22363 6.45586 1.22363 12.5093C1.22363 18.5627 6.13116 23.4703 12.1846 23.4703C18.238 23.4703 23.1456 18.5627 23.1456 12.5093C23.1456 6.45586 18.238 1.54834 12.1846 1.54834ZM16.9357 10.6559C17.0232 10.5559 17.0898 10.4394 17.1316 10.3133C17.1734 10.1872 17.1895 10.054 17.1791 9.92151C17.1686 9.78905 17.1318 9.66002 17.0708 9.542C17.0097 9.42399 16.9257 9.31937 16.8236 9.23431C16.7216 9.14925 16.6035 9.08546 16.4764 9.0467C16.3493 9.00794 16.2158 8.99498 16.0836 9.0086C15.9514 9.02222 15.8233 9.06213 15.7068 9.12599C15.5903 9.18985 15.4877 9.27636 15.4051 9.38045L11.1204 14.5211L8.90328 12.303C8.71535 12.1215 8.46365 12.0211 8.20238 12.0234C7.94111 12.0256 7.69119 12.1304 7.50644 12.3152C7.32169 12.4999 7.21689 12.7499 7.21462 13.0111C7.21235 13.2724 7.31279 13.5241 7.4943 13.712L10.4837 16.7014C10.5816 16.7992 10.6988 16.8756 10.8278 16.9256C10.9569 16.9757 11.095 16.9983 11.2333 16.992C11.3715 16.9857 11.507 16.9507 11.631 16.8892C11.755 16.8276 11.8648 16.7409 11.9534 16.6346L16.9357 10.6559Z"
            fill="#FFFFFF"
          />
        </svg>
      ), */
      svgIcon: "../../src/assets/Icons/CircularCheckboxSVG.svg",
      link: "#",
    },
  ];

  const toggleSubscriptionType = () => {
    setIsAnnual(!isAnnual);
  };

  const currentPacksData = isAnnual ? annualPacksData : monthlyPacksData;

  return (
    <div>
      <PageIntroduction
        imgSrc={"src/assets/Images/Tarifs/Secret-8 1.png"}
        title={"Tarifs"}
        subTitle="Nos Packs"
        titleProps="my-5 max-sm:text-7xl max-md:text-8xl text-9xl text-white text-center"
        subTitleProps="max-sm:text-4xl max-md:text-6xl md:text-6xl text-white text-center"
      />
      <h3 className="mb-6 text-white text-2xl lg:text-4xl text-urbanist text-center w-[80%] mx-auto">
        Explorez nos offres exclusives, choisissez celle qui vous convient, puis
        inscrivez-vous en un clic.
      </h3>
      <div className="mx-40 flex justify-center my-10 mb-2 font-robotoCon font-bold text-xl">
        <div className=" flex justify-center lg:flex-row max-md:flex-row max-sm:flex-col items-center border-2 border-white shadow-cardSmallGreyMedium hover:shadow-cardYellowMain hover:border-yellowMain cursor-pointer transition-all duration-500 sm:flex-col md:flex-col">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-2 my-1 mx-1 ${
              !isAnnual ? "bg-yellowMain text-black" : "bg-blackBG text-white"
            }`}
          >
            Abonnement mensuel
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-6 py-2 my-1 mx-1 ${
              isAnnual ? "bg-yellowMain text-black" : "bg-blackBG text-white"
            }`}
          >
            Abonnement annuel
          </button>
        </div>
      </div>

      <div className="my-10 lg:mx-20 md:mx-10 mt-20 px-20 bg-backgroundPattern">
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4 sm:gap-8 md:gap-6 lg:gap-10 justify-center items-center">
          {currentPacksData.map((pack, index) => (
            <SubscriptionBox
              key={index}
              {...pack}
              isSelected={index === selectedBoxIndex}
              handleSelection={() => handleSelection(index)}
            />
          ))}
        </div>
      </div>
      {/* {selectedBoxData && (
        <div className="text-white">
          <h2>Selected Box Data:</h2>
          <p>Type: {selectedBoxData.type}</p>
          <p>Pack Name: {selectedBoxData.packName}</p>
          <p>Price: {selectedBoxData.price}</p>
          <p>Duration: {selectedBoxData.duration}</p>
          <p>Items:</p>
          <ul>
            {selectedBoxData.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>SVG Icon: {selectedBoxData.svgIcon}</p>
          <p>Link: {selectedBoxData.link}</p>
          <p>Width: {selectedBoxData.width}</p>
          <p>Height: {selectedBoxData.height}</p>
        </div>
      )} */}
      <div className="my-10 flex flex-col gap-5 justify-center items-center">
        {!selectedBoxData && (
          <p className="font-urbanist text-red-500">
            Veuillez sélectionner une option ci-dessus.
          </p>
        )}
        <Link
          to={
            selectedBoxData
              ? `/inscription?data=${encodeURIComponent(
                  JSON.stringify(selectedBoxData)
                )}`
              : "#"
          }
          className={`group hover:text-yellowMain transition duration-300 ${
            !selectedBoxData ? "pointer-events-none opacity-50" : ""
          }`}
        >
          <ButtonYellow
            buttonFont="font-robotoCon uppercase"
            fontWeight="font-black hover:scale-105"
            paddingX={10}
          >
            Inscrire maintenant
          </ButtonYellow>
        </Link>
      </div>
      <div className="scale-90">
        <AppSection />
      </div>
    </div>
  );
}
export default Tarifs;
